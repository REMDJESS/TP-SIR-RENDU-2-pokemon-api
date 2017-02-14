 var pokeApp = angular.module('pokedex', ['ngResource']);

 // // With this you can inject POKEAPI url wherever you want
 pokeApp.constant('POKEAPI', 'http://pokeapi.co');

 pokeApp.config(['$resourceProvider', function($resourceProvider) {
     $resourceProvider.defaults.stripTrailingSlashes = false;
 }]);
 pokeApp.controller('c1', ['$scope', '$log', '$http', function($scope, $log, $http) {
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
     // utilisation du $http



 }]);
 pokeApp.factory('InfoService', ['$resource', function($resource) {
     return $resource('pokemon/:id');
 }]);

 pokeApp.controller("pokeViewCrtl", ["$scope", "$log", "InfoService", "pokeService", function($scope, $log, InfoService, pokeService) {
     $scope.pokeSelected = pokeService;
     $scope.$watch("pokeSelected.id", function(newValue, oldValue) {
         var info = InfoService.get({ id: newValue }, function() {
             //$log.info(info);
             $scope.poke = {
                 id: info.pkdx_id,
                 name: info.name,
                 moves: info.moves,
                 sprites: info.sprites
             };
         });
     });
 }]);