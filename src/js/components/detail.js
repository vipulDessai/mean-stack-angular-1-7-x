angular.module("app")
  .component("detail", {
    templateUrl: "/views/detail.html",
    controller: detail,
    bindings: {
      task: '<',
      onDelete: '&',
      onUpdate: '&'
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

  ctrl.delete = function() {
    ctrl.onDelete({task: ctrl.task});
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({task: ctrl.task, prop: prop, value: value});
  };
}