/*
 * App Footer
 */
(function () {

    var module = angular.module("app-footer", []);

    module.directive("appFooter", [
        function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/app-footer.html"
            };
        }
    ]);

})();