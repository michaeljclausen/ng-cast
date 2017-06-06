angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    currentVideo: '<'
  },
  controller: function() {  
    this.source = () => {
      return 'https://www.youtube.com/embed/' + this.video.id.videoId;
    };
    // play current vid function
  },
  
  
  templateUrl: 'src/templates/videoPlayer.html'
  
});
