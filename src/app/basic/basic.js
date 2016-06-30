(function() {
  'use strict';

  angular
    .module('mathAppUi')
    .controller('BasicController',
        function ($http, $q) {

      var vm = this;




      // This function will call make an http request to the services
      // with the URL to add the two numbers and return the sum
      vm.addNumbers = function () {
            var url = "http://localhost:8080/basic/add/" + vm.addNumberOne + "/" + vm.addNumberTwo;
            return $http({
                url : url,
                method : "GET"
            }).then(function(successResponse) {
                vm.sum = successResponse.data;
            }, function(failureResponse) {
                return $q.reject(failureResponse.statusText);
            });
        }; // End vm.addNumbers

      // This function will call make an http request to the services
      // with the URL to subtract the two numbers and return the sum
      vm.subtractNumbers = function () {
            var url = "http://localhost:8080/basic/subtract/" + vm.subtractNumberOne + "/" + vm.subtractNumberTwo;
            return $http({
                url : url,
                method : "GET"
            }).then(function(successResponse) {
                vm.sum = successResponse.data;
            }, function(failureResponse) {
                return $q.reject(failureResponse.statusText);
            });
        }; // End vm.addNumbers

      // This function will call make an http request to the services
      // with the URL to subtract the two numbers and return the sum
      vm.multiplyNumbers = function () {
            var url = "http://localhost:8080/basic/multiply/" + vm.multiplyNumberOne + "/" + vm.multiplyNumberTwo;
            return $http({
                url : url,
                method : "GET"
            }).then(function(successResponse) {
                vm.sum = successResponse.data;
            }, function(failureResponse) {
                return $q.reject(failureResponse.statusText);
            });
        }; // End vm.addNumbers

      // This function will call make an http request to the services
      // with the URL to subtract the two numbers and return the sum
      vm.divideNumbers = function () {
            var url = "http://localhost:8080/basic/divide/" + vm.divideNumberOne + "/" + vm.divideNumberTwo;
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
