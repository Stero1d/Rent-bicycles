import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterRentalpoint(param) {
      if (param !== '') {
        return this.get('store').query('rental', { rentalpoint: param });
      } else {
        return this.get('store').findAll('rental');
      }
    },
    generalHistory() {
    this.refreshHistory();    
    }
  },
  history: undefined,
  refreshHistory() {
     this.store.query('history-rent', {id: this.get('model.id')}).then(records => {
        this.set('history', records)
     })
  },
   generalHistory() {
    this.refreshHistory();    
  }

});


