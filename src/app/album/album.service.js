(function(){
    "use strict";
    
    angular.module('enukeTest')
        .factory('PhotoService',PhotoService);
        
    function PhotoService($http,$log) {
        var service = {
            getAllPhotos: getPhoto
        };
        
        return service;
        
        function getPhoto() {
            return $http.get('http://jsonplaceholder.typicode.com/photos')
                .then(getPhotoComplete)
                .catch(getPhotoFailed);

            function getPhotoComplete(response) {
                return response.data;
            }

            function getPhotoFailed(error) {
                $log.error('XHR Failed for getPhoto.' + error.data);
            }
        }
    }
})();