/* 
 * About Route 
 */
(function () {

    var module = angular.module("about-route", []);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/about", {
                    templateUrl: "views/about.html"
                });
        }
    ]);

})();

/* 
 * Daisy chaining
module.config(["$routeProvider",
function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "views/about.html"
        })
        .when("/tc", {
            templateUrl: "views/tc.html"
        });
}
]);
 */