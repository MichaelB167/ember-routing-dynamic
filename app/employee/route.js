// app/product/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return [
      {
        id: 1,
        name: 'Person One'
      },
      {
        id: 2,
        name: 'Person Two',
      },
      {
        id: 3,
        name: 'Person Three'
      },
      {
        id: 4,
        name: 'Person Four'
      },
      {
        id: 5,
        name: 'Person Five',
      },
      {
        id: 6,
        name: 'Person Six'
      },
      {
        id: 7,
        name: 'Person Seven'
      },
      {
        id: 8,
        name: 'Person Eight',
      },
      {
        id: 9,
        name: 'Person Nine'
      },
    ][params.product_id - 1];
  }
});
