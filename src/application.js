/*                                                                                                                                                                                                                    
 * Angular Application                                                                                                                                                                                                
 */
(function () {

    var app = angular.module("notes", [
        "ngRoute",
        "ngResource",
        "nvd3",
        "home-route",
        "test-route",
        "about-route",
        "app-header",
        "app-adbar",
        "app-sidebar",
        "app-footer",
        "system-service",
        "random-service"
    ]);

    app.run(["$log",
        function ($log) {
            $log.debug("Angular Application notes is running");
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