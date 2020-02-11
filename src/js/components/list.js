angular.module("app")
  .component("list", {
    templateUrl: "/views/list.html",
    controller: List,
    // specifying the name of the controller
    // for `this` is very important to distinguish the `this`
    // of child and parent
    controllerAs: "list"
  })

List.$inject = ["$scope", "requestService"];

function List($scope, requestService) {
  var ctrl = this;

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
              requestService.exceptionHandler,
          )
          .catch(requestService.exceptionHandler);
  }

  $scope.tasks = [];
  $scope.getRequest = function() {
      requestService.getRequest()
          .then(
              function (res) {
                  $scope.tasks = res.data;
              },
              requestService.exceptionHandler,
          )
          .catch(requestService.exceptionHandler)
  }
  $scope.getRequest();

  ctrl.deleteRequest = function(task) {
    requestService.deleteRequest(task._id)
        .then(
            function (res) {
              let requestedTaskId = task._id;
              if (res.data.deletedCount == 1) {
                $scope.tasks = $scope.tasks.filter(
                  (_task) => {
                    return _task._id == requestedTaskId ? false : true;
                  }
                )
              }
            },
            requestService.exceptionHandler,
        )
        .catch(requestService.exceptionHandler)
  }
}