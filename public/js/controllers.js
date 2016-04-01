var meanApp = angular.module('meanApp', []);
meanApp.controller('AppCtrl', ['$scope','$http', function ($scope, $http) {
    // console.log('Hello, World from controller');

    var refresh = function () {
        $http.get('/contactList').success(function(response) {
            console.log("Received data from server");
            $scope.peopleList = response;
        });
    };

    refresh(); // load the data initially


    $scope.addPerson = function() {
        console.log($scope.person);
        $http.post('/contactList', JSON.stringify($scope.person)).success(function(response) {
            console.log(response); // get the response from the server
            refresh();  // live update
        });

    }

}]);
