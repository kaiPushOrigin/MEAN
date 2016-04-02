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
    };

    $scope.removePerson = function(personID) {
        console.log(personID);
        $http.delete('/contactList/' + personID).success(function(response){
            refresh();
        }); // in app.js --> /contactList/:id
    };

    $scope.editPerson = function(personID) {
        console.log(personID);
        $http.get('/contactList/' + personID).success(function(response){
            $scope.person = response;
        }); // in app.js --> /contactList/:id
    };

    $scope.update = function(personID) {
        console.log($scope.person._id);
        $http.put('/contactList/' + $scope.person._id, $scope.person).success(function(response) {
            refresh();
        });
    }

}]);
