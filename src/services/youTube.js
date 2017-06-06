angular.module('video-player')
.service('youTube', function($http, $window) {
  this.getSearchResults = function(query, callback) {

    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      //contentType: 'application/json',
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxresults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      }
    }).then(function successCallback(response) {
      callback(response.data.items);

    }, function errorCallback(response) {
      console.log(response.data.error.errors[0].message);
    });
  };

  this.getComments = function(video) {
    
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/comments',
      //contentType: 'application/json',
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        type: 'video',
        maxresults: 10,
        videoId: video.id
      }
    }).then(function successCallback(response) {
      console.log(response);

    }, function errorCallback(response) {
      console.log(response.data.error.errors[0].message);
    });
  };
  

});
