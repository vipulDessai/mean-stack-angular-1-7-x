angular.module("app")
    .component("taskCtrl", {
        templateUrl: "/views/task.html",
        controller: Away,
        bindings: {
            view: '<',
            data: '<',
            certData: '<',
            localStorageService: '<'
        },
    });

Away.$inject = ["$scope", "tasksService"];

function Away($scope, tasksService) {
    $scope.message = "foo"
}