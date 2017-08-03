import RentalsController from '../rentals';

export default RentalsController.extend({
  actions: {
    buttonClick() {
    var $add = $(".show-block-rent"),
    titleShow = $(".title").text(),
    pointShow = $(".point-rent").text();

    if ($add.hasClass('hidden-block')) {
        $add.removeClass('hidden-block');  
        $(".name-velo-rent").val(titleShow);
        $(".point-velo-rent").val(pointShow);
    }
    else
        {$add.addClass('hidden-block');}
    },
    btnOk() {
    var $ok = $(".success-rental");

    if ($ok.hasClass('hidden-block')) {
        $ok.removeClass('hidden-block');  
    }
    else
        {$ok.addClass('hidden-block');}
    },
     createHistory() {
    var $nameShow = $(".name-rent").val(),
    $del = $(".show-block-rent"),
    $vis = $(".success-rental"),
    $titleShow = $(".name-velo-rent").val(),
    $pointShow = $(".point-velo-rent").val(),
    $timeShow = $(".time-velo-rent").val();
     if ($del.hasClass('hidden-block')) {
        $del.removeClass('hidden-block'); 
        $vis.addClass('hidden-block');
    }
    else
        {$del.addClass('hidden-block');
        $vis.removeClass('hidden-block'); }
    function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
    } 
    this.store.createRecord('history-rent', {
    id: (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase(),
    rentalid: this.get('model.id'),
    name:  $nameShow,
    title:  $titleShow,
    rentalpoint:  $pointShow,
    time:  $timeShow,
    mean: '2'
}).save().then(() => {this.refreshHistory()})
    },
    getHistory() {
    this.refreshHistory();    
    var $getHistory = $(".veloHistoryRent"),
    titleShow = $(".title").text();
    if ($getHistory.hasClass('hidden-block')) {
        $getHistory.removeClass('hidden-block');  
    }
    else
        {$getHistory.addClass('hidden-block');}            
    }
  },
  history: undefined,
  refreshHistory() {
     this.store.query('history-rent', {id: this.get('model.id')}).then(records => {
        this.set('history', records);
     })
  },
   generalHistory() {
    this.refreshHistory();    
  }

});
 
    