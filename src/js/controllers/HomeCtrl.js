angular.module("helloWorldApp")
    .controller("HomeCtrl", [
        "$scope",
        function($scope) {
            $scope.message = "foo bar!!";
        }
    ]);