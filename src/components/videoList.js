angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    handleClick: '<'
  },
  controller: function() {
    //console.log(this);
    //this.onClick = () => {
      
    //};
  },
  templateUrl: 'src/templates/videoList.html'
});
