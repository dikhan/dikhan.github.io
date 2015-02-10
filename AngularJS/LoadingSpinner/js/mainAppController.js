/*
 *
 *  File Name:  MainAppController.js
 *
 *  Author:     Daniel I. Khan Ramiro
 *  Blog:       http://hexspeaks.blogspot.ca/
 *
 *  Description: Angular MainApp controller - In charge of managing all the data binding and subsequent calls to the
 *               MainAppService
 *
 *  Revision History
 *
 *  Date        Author                  Description
 *  -------     ------------------      -----------------------------------------
 *  03Feb15     Daniel I. Khan Ramiro   Original version
 */
mainApp.controller('MainAppController', ['$rootScope','$scope', '$http', '$log', 'MainAppService', function($rootScope, $scope, $http, $log, MainAppService){
    
    var mainAppController = this;

    $scope.searchResults = [];
    $scope.searchQuery = "";

    $scope.init = function(){
        $scope.fetchResults();
    }

    $scope.fetchResults = function()
    {
        MainAppService.fetchNewResults($scope.searchQuery).then(function(data){
            $scope.searchResults = data["search"].results;
        }); // End getUserLocation

    }
      
}]);