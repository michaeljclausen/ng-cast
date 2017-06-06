angular.module('video-player')
.service('youTube', function($http, $window) {
  this.getSearchResults = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      }
    }).then(function successCallback(response) {
      //console.log('look', response.data.items[0]);
      callback(response.data.items);
      //this.getComments

    }, function errorCallback(response) {
      console.log(response.data.error.errors[0].message);
    });
  };

  this.getComments = function(video, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/commentThreads',
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        type: 'video',
        maxResults: 50,
        videoId: video.id.videoId
      }
    }).then(function successCallback(response) {
      //console.log('comments', response.data.items);
      callback(response.data.items);

    }, function errorCallback(response) {
      console.log('this vid', video);
      console.log('error response', response);
      console.log(response.data.error.errors[0].message);
    });
  };
  

});
