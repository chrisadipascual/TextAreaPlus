angular.module("umbraco").controller("TextareaPlus.controller",
    function ($scope, $http, assetsService) {
        if ($scope.model.config.trows === null || $scope.model.config.trows === "") {
            $scope.model.config.trows = 5;
        }
        if ($scope.model.config.tcols === null || $scope.model.config.tcols === "") {
            $scope.model.config.tcols = 66.6;
        }
});
