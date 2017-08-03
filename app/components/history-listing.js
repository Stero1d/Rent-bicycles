import Ember from 'ember';

export default Ember.Component.extend({
    historyMean: Ember.computed('history.@each',function(){
        var meanHistory = this.get('history') 
        var sum = 0,
        meanSum =0,
        meanSumRound;
        meanHistory.forEach(function (a) {
            sum += +a.get('time');
        });
        meanSum = sum/meanHistory.toArray().length;
        meanSumRound = meanSum.toFixed(1); 
        return  meanSumRound;      
    }),
    history: undefined,
    historyObj: Ember.observer('history.@each',function() {
        var meanHistory = this.get('history');
        var sum = {};
        meanHistory.forEach(function (a) {
        if (sum[a.get('rentalpoint')]) {
            sum[a.get('rentalpoint')] += +a.get('time');
        } else {
             sum[a.get('rentalpoint')] = +a.get('time');
        }
    });
        for (var i in sum) {
            var len = meanHistory.toArray().filter((record) => i === record.get('rentalpoint')).length;
            sum[i] = sum[i]/len;
            sum[i] = sum[i].toFixed(1);
        }
         meanHistory.forEach(function (a) {
         a.set('mean', sum[a.get('rentalpoint')]);
        })
    })
});
