 var pokeApp = angular.module('pokedex', ['ngResource']);

 // // With this you can inject POKEAPI url wherever you want
 // pokeApp.constant('POKEAPI', 'http://pokeapi.co');

 // pokeApp.config(['$resourceProvider', function($resourceProvider) {
 //     $resourceProvider.defaults.stripTrailingSlashes = false;
 // }]);
 pokeApp.controller('c1', ['$scope', '$log','$http', function($scope, $log, $http) {
     $scope.pokemons = [
         { id: "003", name: "Florizarre" },
         { id: "004", name: "Salamèche" },
         { id: "005", name: "Reptincel" },
         { id: "007", name: "Carapuce" },
         { id: "009", name: "Tortank" },
         { id: "010", name: "Chenipan" },
         { id: "012", name: "Papilusion" },
         { id: "015", name: "Dardargnan" },
         { id: "016 ", name: "Roucool" }

     ];
 //$scope.$log = $log;
     //$scope.nom = '';
  $http.get("http://pokeapi.co/api/v1/pokedex/1").
     success(function(data, status) {
         $scope.pokemons = data.pokemon;
         $log.info(data);
         $scope.$log = $log
     }).
     error(function(data, status) {
         document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
     });
 }]);
