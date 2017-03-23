(function() {
  'use strict';

  angular
    .module('enukeTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('album', {
        url: '/album',
        templateUrl: 'app/album/album.html',
        controller: 'MyAlbumController',
        controllerAs: 'album'
      })
      .state('contact', {
        url: '/contactMe',
        templateUrl: 'app/contactMe/contactMe.html',
        controller: 'ContactMeController',
        controllerAs: 'contact'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
