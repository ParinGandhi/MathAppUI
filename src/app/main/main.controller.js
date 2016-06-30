(function() {
  'use strict';

  angular
    .module('mathAppUi')
    .controller('MainController',
        function ($http, $q) {

      var vm = this;




      // This function will call make an http request to the services
      // with the URL to add the two numbers and return the sum
      vm.addNumbers = function () {
            var url = "http://localhost:8080/math/add/" + vm.addNumberOne + "/" + vm.addNumberTwo;
            return $http({
                url : url,
                method : "GET"
            }).then(function(successResponse) {
                vm.sum = successResponse.data;
            }, function(failureResponse) {
                return $q.reject(failureResponse.statusText);
            });
        }; // End vm.addNumbers


  });
})();
