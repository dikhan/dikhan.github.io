 /*
 *  File Name:  mainApp.js
 *
 *  Author:     Daniel I. Khan Ramiro
 *
 *  Description: Angular configuration module
 *
 *  Revision History
 *
 *  Date        Author                Description
 *  -------     ------------------    -----------------------------------------
 *  03Feb15     Daniel I. Khan Ramiro   Original version
 */
var mainApp = angular.module('MainApp', ['ngResource']);


mainApp.config(['$httpProvider', function($httpProvider) {

  //$httpProvider.responseInterceptors.push('myHttpInterceptor');


  // Interceptor created to force the query to take longer so we can see the loading spinner in action
  // http://stackoverflow.com/questions/18238227/delay-an-angular-js-http-service
  $httpProvider.responseInterceptors.push(["$q", "$timeout", function ($q, $timeout) {
    return function (promise) {
        var defer = $q.defer();

        $timeout(function () {
            promise.then(function (response) {
              $("#spinner-background").hide();
                return defer.resolve(response);
            }, function (response) {
              $("#spinner-background").hide();
              return $q.reject(response);
            });
        }, 2500);

        return defer.promise;
    };
  }]);

  var spinnerFunction = function spinnerFunction(data, headersGetter) {
    $("#spinner-background").show();
    return data;
  };

  $httpProvider.defaults.transformRequest.push(spinnerFunction);
}]);

// mainApp.factory('myHttpInterceptor', function ($q, $window) {
//   return function (promise) {
//     return promise.then(function (response) {
//       $("#spinner-background").hide();
//       return response;
//     }, function (response) {
//       $("#spinner-background").hide();
//       return $q.reject(response);
//     });
//   };
// });