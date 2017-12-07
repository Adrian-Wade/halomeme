
/*
 * App Header
 */
(function () {

    var module = angular.module("app-header", []);

    module.controller("HeaderController", ["$log", "SystemService",
        function ($log, systemService) {
            $log.debug("HeaderController: starting");
            var that = this;
            that.systemService = systemService;
        }
    ]);

    module.directive("appHeader", [
        function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/app-header.html",
                controller: "HeaderController",
                controllerAs: "headerCtrl"
            };
        }
    ]);

})();