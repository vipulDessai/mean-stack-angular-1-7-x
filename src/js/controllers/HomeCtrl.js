angular.module("app")
    .controller("HomeCtrl", [
        "$scope",
        function($scope) {
            $scope.message = "foo bar!!";
        }
    ]);