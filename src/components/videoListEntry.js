angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<'
  },
  controller: function() {
    console.log('list entry', this);
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
