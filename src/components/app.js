angular.module('video-player', [])

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller() {
    this.videos = exampleVideoData;
  }
});
