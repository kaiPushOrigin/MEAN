var meanApp = angular.module('meanApp', []);
meanApp.controller('AppCtrl', ['$scope','$http', function ($scope, $http) {
    console.log('Hello, World from controller');
}]);
