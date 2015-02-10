/*
 *
 *  File Name:  MainAppService.js
 *
 *  Author:     Daniel I. Khan Ramiro
 *  Blog:       http://hexspeaks.blogspot.ca/
 *
 *  Description: Angular MainApp Service - in charge of performing all the AJAX connections
 *
 *  Revision History
 *
 *  Date        Author                  Description
 *  -------     ------------------      -----------------------------------------
 *  03Feb15     Daniel I. Khan Ramiro   Original version
 */
mainApp.service('MainAppService', ['$rootScope', '$http', '$log', '$q', function($rootScope, $http, $log, $q){

    return {

          fetchNewResults : function(searchQuery)
          {
              var delay = $q.defer();
              // REST Public End points - https://www.biocatalogue.org/wiki/public:api#quick_examples
              $http({
                method: 'GET',
                //url: "https://www.biocatalogue.org/search.json",
                url: "../bioCatalogueSearchResults.json",
                data: $.param({ // Form Parameters
                }),              
                params: { // Query Parameters
                    "q":searchQuery
                },
                headers: {
                  'Content-Type': 'application/json'
                }
              }).success(function(response){delay.resolve(response);})
              .error(function(){delay.reject("Error getting locations");});

              return delay.promise;
          }
      }
}]);


