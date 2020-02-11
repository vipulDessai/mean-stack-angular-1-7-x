angular.module("app")
  .service("requestService", requests);

requests.$inject = ["$http"];

function requests($http) {
  return {
    postRequest: function(data) {
      return $http({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: data,
        url : "api/tasks",
      })
    },
    getRequest: function() {
      return $http({
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        url : "api/tasks",
      })
    },
    deleteRequest: function(id) {
      return $http({
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        url : "api/tasks/" + id,
      })
    },
  }
}