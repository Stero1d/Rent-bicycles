import DS from 'ember-data';

export default DS.Model.extend({
  rentalid: DS.attr(),
  name: DS.attr(),
  title: DS.attr(),
  rentalpoint: DS.attr(),
  time: DS.attr(),
  mean: DS.attr()
});
