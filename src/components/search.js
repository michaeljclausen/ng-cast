angular.module('video-player')

.component('search', {
  bindings: {
    handleSearch: '<'
  },
  templateUrl: 'src/templates/search.html'
});
