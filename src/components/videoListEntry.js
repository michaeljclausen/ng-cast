angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<',
    handleClick: '<'
  },
  controller: function() {
    // this.onClick = () => {
    //   console.log('click');
    //   this.handleClick();
    // };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
