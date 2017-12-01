/*                                                                                                                                                                                                                    
 * Angular Application                                                                                                                                                                                                
 */
(function () {

    var app = angular.module("notes", [
        "ngRoute",
        "home-route",
        "about-route",
        "app-header",
        "app-sidebar",
        "app-footer"
    ]);

    app.run(["$log",
        function ($log) {
            $log.debug("Angular Application notes is running");
        }
    ]);

    app.controller("BodyController", ["$log",
        function ($log) {
            $log.debug("BodyController: starting");

            var that = this;
            that.angularVersion = angular.version.full;

        }
    ]);

    app.config(['$locationProvider',
        function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }
    ]);

})(); 