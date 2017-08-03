export default Ember.Route.extend({
    /* model(params) {
      return Ember.RSVP.hash({
      rental: this.store.findRecord('rental', params.rental_id),
      history: this.store.query('history-rent', {id: params.rental_id}),
    });
  }  */
     model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }

});

