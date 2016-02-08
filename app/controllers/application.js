import Ember from 'ember';

export default Ember.Controller.extend({
  tintColor: 'red',

  actions: {
    changeTintColor() {
      this.set('tintColor', 'blue');
    }
  }
});
