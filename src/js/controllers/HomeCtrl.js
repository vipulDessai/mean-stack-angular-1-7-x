angular.module("app")
    .controller("homeCtrl", Home)

Home.$inject = ["$scope", "requestService"];

function Home($scope, requestService) {
    var exceptionHandler = function (exception) {
        console.log(exception);
    }

    $scope.postRequest = function () {
        var data = {
            name: "foo",
            type: "bar",
        }
        requestService.postRequest(data)
            .then(
                function (res) {
                    $scope.tasks.push(res.data[0]);
                },
                exceptionHandler,
            )
            .catch(exceptionHandler)
    }

    $scope.tasks = [];
    $scope.getRequest = function() {
        requestService.getRequest()
            .then(
                function (res) {
                    $scope.tasks = res.data;
                },
                exceptionHandler,
            )
            .catch(exceptionHandler)
    }
    $scope.getRequest();

    this.deleteRequest = function(id) {
        requestService.deleteRequest(id)
            .then(
                function(res) {
                    console.log(res);
                },
                exceptionHandler,
            )
            .catch(exceptionHandler);
    }
}