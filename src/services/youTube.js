angular.module('video-player')
.service('youTube', function($http) {
  this.getSearchResults = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      contentType: 'application/json',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      },
      success: function(data) {
        console.log(data);
        //callback()
      },
      error: function(data) {
        console.log(data);
        console.log('error');
      }
      
    });
  };
});
