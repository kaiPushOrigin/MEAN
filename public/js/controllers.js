var meanApp = angular.module('meanApp', []);
meanApp.controller('AppCtrl', ['$scope','$http', function ($scope, $http) {
    // console.log('Hello, World from controller');

    $http.get('/contactList').success(function(response) {
        console.log("Received data from server");
        $scope.peopleList = response;
    })
}]);
