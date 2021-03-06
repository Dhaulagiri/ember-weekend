import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
  player: Ember.inject.service('player'),
  headData: Ember.inject.service(),
  afterModel() {
    set(this, 'headData.title', 'Ember Weekend');
    set(this, 'headData.description', 'Ember.js is a frontend JavaScript framework that has exciting applications.  In this podcasts we share news, events, and some of our experiences.');
    set(this, 'headData.image', 'https://i.imgur.com/VQmTj1h.png');
    set(this, 'headData.site_name', 'Ember Weekend');
    set(this, 'headData.locale', 'en_US');
  }
});
