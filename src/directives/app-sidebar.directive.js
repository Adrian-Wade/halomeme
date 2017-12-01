/*
 * App Sidebar
 */
(function () {

    var module = angular.module("app-sidebar", []);

    module.directive("appSidebar", [
        function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/app-sidebar.html"
            };
        }
    ]);

})();