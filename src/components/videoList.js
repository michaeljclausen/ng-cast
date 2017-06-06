angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    handleClick: '<'
  },
  controller: function() {
    //console.log(this);
    this.onClick = () => {
      
    };
  }
});
