/* 
 * Home Route 
 */
(function () {

    var module = angular.module("home-route", []);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        }
    ]);

})(); 