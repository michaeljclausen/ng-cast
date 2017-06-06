angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    
    this.$onInit = () => {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      youTube.getSearchResults('cats', (data) => {
        this.videos = data;
        this.currentVideo = data[0];
        youTube.getComments(data[0], (data) => {
          this.commentsList = data;
          console.log(data[0]);
          console.log(data[0].snippet.topLevelComment.snippet.textOriginal);
        });
      }); 
    },
    
    this.handleVideoEntryClick = (video) => {
      this.currentVideo = video;
    };
    
    this.handleSearchClick = (query) => {
      youTube.getSearchResults(query, (data) => {
        console.log('data', data);
        this.videos = data;
        this.currentVideo = data[0];
        youTube.getComments(data[0], (data) => {
          this.commentsList = data;
          //console.log(data);
        });
      });
    };
  }
});
