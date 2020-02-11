angular.module("app")
  .component("detail", {
    templateUrl: "/views/detail.html",
    controller: detail,
    bindings: {
      task: '<',
      deleteRequest: '&',
    }
  });

detail.$inject = ["$scope"];

function detail($scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    $scope.id = ctrl.task._id;
    $scope.name = ctrl.task.name;
    $scope.type = ctrl.task.type;
  }

  $scope.deleteRequest = function(event) {
    ctrl.deleteRequest({task: ctrl.task});
  };
}