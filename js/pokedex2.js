var pokeApp = angular.module('pokedex', ['pokeDirective', 'pokeController', 'pokeService']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
// Directive
var pokeDirective = angular.module('pokeDirective', []);
pokeDirective.directive('pokedex', function() {
    return {
        restrict: 'E',
        templateUrl: 'directive.html'
    };
});


var pokeService = angular.module('pokeService', ['ngResource']);
var pokeApiUrl = "http://pokeapi.co/";
var urlGetPokemonById = pokeApiUrl + 'api/v1/pokemon/:pokemonId';

pokeService.factory('Pokemon', ['$resource', function($resource) {
    return $resource(urlGetPokemonById, { pokemonId: '@id' });
}]);

pokeService.factory('bridge', [function() {
    var id = 0;
    var name = "";
    var scope;

    var pokemon = {

        getId: function() {
            return id;
        },

        setId: function(pkid) {
            id = pkid;
        },

        getScope: function() {
            return scope;
        },

        setScope: function(sc) {
            scope = sc;
        },

        getName: function() {
            return name;
        },

        setName: function(pkName) {
            name = pkName;
        }
    };
    return pokemon;
}]);
var pokeController = angular.module('pokeController', []);
var oldValue = "";

pokeController.controller('searchPokemon', ['$scope', '$log', '$http', '$templateCache', 'bridge',
    function($scope, $log, $http, $templateCache, bridge) {
        bridge.setScope($scope);
        $scope.loading = true;
        $scope.onChange = function(pokemonId) {
            $scope.loading = true;
            bridge.setId(pokemonId);
        };
        $scope.getSelectedPokemon = function(selectedPokemon) {
            if (selectedPokemon !== undefined && oldValue !== selectedPokemon) {
                oldValue = selectedPokemon;
                $scope.loading = true;
                bridge.setId(selectedPokemon);
            }
        };

        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v1/pokedex/1',
            cache: $templateCache
        }).then(function(response) {
            $log.log(response);
            $scope.pokemonList = response.data.pokemon;
            $scope.loading = false;
        }, function(response) {
            $log.log(response);
            $scope.loading = false;
        });
    }
]);

pokeController.controller('pokemonDetails', ['$scope', 'Pokemon', 'bridge', '$log', function($scope, Pokemon, bridge, $log) {

    //http://stackoverflow.com/questions/26800783/angularjs-watch-service-object
    $scope.$watch(function() {
        return bridge.getId();
    }, function() {
        //if(bridge.getId() !== undefined)
        //{
        Pokemon.get({ pokemonId: bridge.getId() }, function(response) {
                if (response.national_id !== undefined) {
                    $scope.data = response;
                    $scope.data.info = '#' + $scope.data.national_id + ' ' + $scope.data.name;
                    $scope.data.pokemonImageLink = 'http://pokeapi.co/media/img/' + $scope.data.national_id + '.png';
                } else {
                    $scope.data = {};
                }
                bridge.getScope().loading = false;
            },
            function(response) {
                $scope.data = {};
                bridge.getScope().loading = false;
            });
        //}
    }, true);

}]);