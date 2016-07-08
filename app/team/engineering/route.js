import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Person One'
      },
      {
        id: 2,
        name: 'Person Two'
      },
      {
        id: 3,
        name: 'Person Three'
      },
    ];
  }
});
