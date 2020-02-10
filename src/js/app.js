angular.module("app", [
    "ngRoute",
])
.config([
    "$routeProvider",  "$locationProvider",
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "/views/home.html",
                controller: "HomeCtrl",
            })
            .when("/task", {
                controller: "taskCtrl",
            });
    }
])