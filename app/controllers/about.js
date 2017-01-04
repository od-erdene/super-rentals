import Ember from 'ember';

export default Ember.Controller.extend({
  myplayer: null,
  actions: {
    ready(player, component) {
      // This will set the player's "src" property based on the component's "sources" property.
      component.bindPropertyToPlayer(player, 'src');
      console.log('ready');
      player.play();
      this.set('myplayer', player);
      // component.sendActionOnPlayerEvent(player, 'playing');
    },
    playing(player, component) {
      console.log('playing');
      // console.log(this.get('myplayer'));
    },
    mypause() {
      console.log("pause");
      this.get('myplayer').pause();
      // console.log(this.get('myplayer'));
    },
    myplay() {
      console.log("play");
      this.get('myplayer').play();
    }
  }
});
