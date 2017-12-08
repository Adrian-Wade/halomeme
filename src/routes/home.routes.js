/* 
 * Home Route 
 */
(function () {

    var module = angular.module("home-route", []);

    module.controller("HomeController", ["$log", "$interval", "SystemService",
        function ($log, $interval, systemService) {
            $log.debug("HomeController: starting");

            var that = this;
            that.systemService = systemService;
            that.angularVersion = angular.version.full;

            that.date = new Date();
            that.names = [
                "Lars",
                "Adrian"
            ];

            $interval(function () {

                that.date = new Date();
            }, 1000);

        }
    ]);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html",
                    controller: "HomeController",
                    controllerAs: "homeCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
        }
    ]);

})();



