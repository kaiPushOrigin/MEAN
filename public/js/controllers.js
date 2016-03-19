var meanApp = angular.module('meanApp', []);
meanApp.controller('AppCtrl', ['$scope','$http', function ($scope, $http) {
    // console.log('Hello, World from controller');
    personOne = {
        name: 'Tim',
        email: 'tim@email.com',
        number: '(111) 111-1111'
    };

    personTwo = {
        name: 'Emily',
        email: 'emily@email.com',
        number: '(222) 222-2222'
    };

    personThree = {
        name: 'John',
        email: 'john@email.com',
        number: '(333) 333-3333'
    };

    var people = [personOne, personTwo, personThree];
    $scope.peopleList = people;
}]);
