/* 
 * Foot 1 Route 
 */
(function () {
    
        var module = angular.module("footer-route", []);
    
        module.config(["$routeProvider",
            function ($routeProvider) {
                $routeProvider
                    .when("/footer", {
                        templateUrl: "views/footer.html"
                    });
            }
        ]);
    
    })(); 