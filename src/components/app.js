angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    
    this.videos = exampleVideoData; // initial listData
    // set inital state
    this.currentVideo = this.videos[0];
    
    this.handleVideoEntryClick = (video) => {
      console.log(video);
      this.currentVideo = video;
    };
    
    this.handleSearchClick = (query) => {
      getSearchResults(query);
      console.log(query);
    };
  }
});
