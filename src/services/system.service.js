/* 
 * System Service 
 */
(function () {

    var module = angular.module("system-service", []);

    module.factory("SystemService", ["$log", "$interval",
        function ($log, $interval) {
            $log.debug("SystemService: starting");

            var me = {
                title: "HaloMeme",
                counter: 0
            }

            $interval(function () {
                me.counter = me.counter + 1;
            }, 1000);

            return me;
        }
    ]);

})();