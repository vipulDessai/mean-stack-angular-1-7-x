angular.module("app")
    .controller("AwayCtrl", away);

away.$inject = ["$scope", "tasksService"];

function away($scope, tasksService) {
    $scope.message = "this is away component!!";

    var exceptionHandler = function (exception) {
        console.log(exception)
    }

    $scope.postTasks = function() {
        var data = {
            name: "foo",
            place: "bar",
        }
        tasksService.postTasks(data)
            .then(
                function(res) {
                    console.log(res);
                },
                exceptionHandler,
            )
            .catch(exceptionHandler)
    }
}