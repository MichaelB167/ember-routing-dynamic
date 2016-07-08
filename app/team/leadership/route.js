import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 4,
        name: 'Person Four'
      },
      {
        id: 5,
        name: 'Person Five'
      },
      {
        id: 6,
        name: 'Person Six'
      },
    ];
  }
});
