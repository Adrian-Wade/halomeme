/*
 * App Header
 */
(function() {
    
        var module = angular.module("app-header", []);
    
        module.directive("appHeader", [
            function() {
                return {
                    restrict: "E", 
                    replace: true, 
                    templateUrl: "views/app-header.html"
                };
            }
        ]);
    
    })();