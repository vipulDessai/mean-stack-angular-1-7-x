angular.module("app")
    .controller("awayCtrl", Away);

Away.$inject = ["$scope", "$location", "requestService"];

function Away($scope, $location, requestService) {
    let queryParams = $location.search();
    $scope.id = queryParams.id;
}