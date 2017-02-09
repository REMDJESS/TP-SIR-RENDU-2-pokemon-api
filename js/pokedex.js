 var pokeApp = angular.module('pokedex', ['ngResource']);

 // // With this you can inject POKEAPI url wherever you want
 // pokeApp.constant('POKEAPI', 'http://pokeapi.co');

 // pokeApp.config(['$resourceProvider', function($resourceProvider) {
 //     $resourceProvider.defaults.stripTrailingSlashes = false;
 // }]);
 angular.module('pokedex', []).controller('namesCtrl', function($scope) {
     $scope.pokemons = [
         { id: '1', name: 'Pokemon 1' },
         { id: '2', name: 'Pokemon 2' },
         { id: '3', name: 'Pokemon 3' },
         { id: '4', name: 'Pokemon 4' },
         { id: '5', name: 'Pokemon 5' }
     ];
 });