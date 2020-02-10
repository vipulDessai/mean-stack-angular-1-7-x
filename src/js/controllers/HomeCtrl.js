angular.module("app")
    .controller("HomeCtrl", Home)

Home.$inject = ["$scope", "tasksService"];

function Home($scope, tasksService) {
    this.$onInit = function () {
        $scope.getTasks();
    };
    var exceptionHandler = function (exception) {
        console.log(exception)
    }

    $scope.postTasks = function () {
        var data = {
            name: "foo",
            place: "bar",
        }
        tasksService.postTasks(data)
            .then(
                function (res) {
                    console.log(res);
                },
                exceptionHandler,
            )
            .catch(exceptionHandler)
    }
    $scope.getTasks = function() {
        tasksService.getTasks()
            .then(
                function (res) {
                    console.log(res);
                },
                exceptionHandler,
            )
            .catch(exceptionHandler)
    }
}