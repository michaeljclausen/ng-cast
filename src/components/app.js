angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    
    this.$onInit = () => {
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];  
    },
    
    this.handleVideoEntryClick = (video) => {
      this.currentVideo = video;
    };
    
    this.handleSearchClick = (query) => {
      youTube.getSearchResults(query, (data) => {
        this.videos = data;
        this.currentVideo = data[0];
        
      });
    };
  }
});
