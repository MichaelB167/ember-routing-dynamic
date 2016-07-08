import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 7,
        name: 'Person Seven'
      },
      {
        id: 8,
        name: 'Person Eight'
      },
      {
        id: 9,
        name: 'Person Nine'
      },
    ];
  }
});
