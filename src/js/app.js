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
                controller: "homeCtrl",
            })
            .when("/away", {
                templateUrl: "/views/away.html",
                controller: "awayCtrl",
            });
    }
])