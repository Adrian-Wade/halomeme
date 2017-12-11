/* 
 * Random Service 
 */
(function () {

    var module = angular.module("random-service", []);

    module.factory("RandomResource", ["$resource",
        function ($resource) {
            return $resource("/api/random");
        }
    ]);

    module.factory("RandomService", ["$log", "$interval", "RandomResource",
        function ($log, $interval, randomResource) {
            $log.debug("RandomService: starting");

            var me = {
                get: function (max, successCb, errorCb) {
                    randomResource.get({max:max}).$promise.then(function (result) {
                        successCb(result);
                    }, function (error) {
                        (errorCb || angular.noop)(error.data);
                    });
                }
            }

            return me;
        }
    ]);

})();