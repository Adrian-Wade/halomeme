/*
 * App Adbar
 */
(function () {

    var module = angular.module("app-adbar", []);

    module.directive("appAdbar", [
        function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/app-adbar.html"
            };
        }
    ]);

})();