 var pokeApp = angular.module('pokedex', ['ngResource']);

 // // With this you can inject POKEAPI url wherever you want
 // pokeApp.constant('POKEAPI', 'http://pokeapi.co');

 // pokeApp.config(['$resourceProvider', function($resourceProvider) {
 //     $resourceProvider.defaults.stripTrailingSlashes = false;
 // }]);
 pokeApp.controller('c1', ['$scope', '$log', '$http', function($scope, $log, $http) {
     $scope.poke = [
         { id: "3", name: "Florizarre" },
         { id: "4", name: "Salamèche" },
         { id: "5", name: "Reptincel" },
         { id: "7", name: "Carapuce" },
         { id: "9", name: "Tortank" },
         { id: "10", name: "Chenipan" },
         { id: "012", name: "Papilusion" },
         { id: "015", name: "Dardargnan" },
         { id: "016 ", name: "Roucool" }

     ];
     //$scope.$log = $log;
     //$scope.nom = '';
     // utilisation du $http
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