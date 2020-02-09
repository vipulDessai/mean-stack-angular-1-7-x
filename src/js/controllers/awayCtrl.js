angular.module("helloWorldApp")
    .controller("AwayCtrl", [
        "$scope",
        function($scope) {
            $scope.message = "this is away component!!";
        }
    ]);