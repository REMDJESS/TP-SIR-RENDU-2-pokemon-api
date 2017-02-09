 var pokeApp = angular.module('pokedex', ['ngResource']);

 // // With this you can inject POKEAPI url wherever you want
 // pokeApp.constant('POKEAPI', 'http://pokeapi.co');

 // pokeApp.config(['$resourceProvider', function($resourceProvider) {
 //     $resourceProvider.defaults.stripTrailingSlashes = false;
 // }]);
 pokeApp.controller('c1', ['$scope', '$log', function($scope, $log) {
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

     $scope.go = function() {
         $log.debug('C\'est parti !');
     };
 }]);