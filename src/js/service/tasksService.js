angular.module("app")
  .service("tasksService", tasks);

tasks.$inject = ["$http"];

function tasks($http) {
  return {
    postTasks: function(data) {
      return $http({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: data,
        url : "api/tasks",
      })
    }
  }
}