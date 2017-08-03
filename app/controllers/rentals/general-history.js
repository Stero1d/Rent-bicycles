
export default Ember.Controller.extend({
  actions: {
    generalHistory() {
    this.refreshHistory();    
    }
  },
  history: undefined,
  refreshHistory() {
     this.store.query('history-rent').then(records => {
        this.set('history', records)
     })
  }
});