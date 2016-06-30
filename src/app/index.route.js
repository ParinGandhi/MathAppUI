(function() {
  'use strict';

  angular
    .module('mathAppUi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/basic/basic.html',
        controller: 'BasicController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
