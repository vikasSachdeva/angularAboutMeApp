(function(){
    "use strict";
    
    angular.module('enukeTest')
        .controller('MyAlbumController',MyAlbumController);
        
    function MyAlbumController($log,PhotoService) {
        var vm = this;
        vm.turnOffSpinner = false;
        activate();

        function activate() {
            return getAllPhotos().then(function() {
                $log.debug('Activated Photos View');
            });
        }

        function getAllPhotos() {
            return PhotoService.getAllPhotos()
                .then(function(data) {
                    // var reducedFriendList = data.filter(function(object) {
                    //     return object.id<10;
                    // })
                    var reducedPhotoList = data.slice(0, 12);
                    vm.myAllPhotos = reducedPhotoList;
                    vm.turnOffSpinner = true;
                    return vm.myAllPhotos;
                });
        }
    }
})();