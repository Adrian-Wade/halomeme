/*
 * Angular Application
 */
(function() {
    
        var app = angular.module("notes", []);
    
        app.run(["$log",
            function($log) {
                $log.debug("Angular Application notes is running");
            }
        ]);
    
        app.controller("BodyController", ["$log",
            function($log) {
                $log.debug("BodyController: starting");
    
                var that = this;
                that.angularVersion = angular.version.full;
    
            }
        ]);
    
    })();