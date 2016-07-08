import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('team', function(){
    this.route('engineering');
    this.route('leadership');
    this.route('sales');
  });
  this.route('products');
  this.route('product', {path: '/products/:product_id'})
  this.route('employee', {path: '/employees/:employee_id'});
});

export default Router;
