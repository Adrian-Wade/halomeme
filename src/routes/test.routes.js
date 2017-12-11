/* 
 /* 
 * Test Route 
 */
(function () {

    var module = angular.module("test-route", []);

    module.controller("TestController", ["$log", "$scope", "$interval", "RandomService",
        function ($log, $scope, $interval, randomService) {
            $log.debug("TestController: starting");

            var that = this;
            that.max=50;

            that.chartData = [
                {
                    key: " Random Data",
                    color: "green",
                    strokeWidth: 1,
                    area: true,
                    values: []
                }
            ];

            that.chartOptions = {
                chart: {
                    type: 'lineChart',
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    x: function (d) { return d.x; },
                    y: function (d) { return d.y; },
                    useInteractiveGuideline: true,
                    dispatch: {
                        stateChange: function (e) { console.log("stateChange"); },
                        changeState: function (e) { console.log("changeState"); },
                        tooltipShow: function (e) { console.log("tooltipShow"); },
                        tooltipHide: function (e) { console.log("tooltipHide"); }
                    },
                    xAxis: {
                        axisLabel: 'Time (ms)'
                    },
                    yAxis: {
                        axisLabel: 'Voltage (v)',
                        tickFormat: function (d) {
                            return d3.format('.02f')(d);
                        },
                        axisLabelDistance: -10
                    }
                },
                title: {
                    enable: true,
                    text: 'Title for Line Chart'
                },
                subtitle: {
                    enable: true,
                    text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                    css: {
                        'text-align': 'center',
                        'margin': '10px 13px 0px 7px'
                    }
                },
                caption: {
                    enable: true,
                    html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                    css: {
                        'text-align': 'justify',
                        'margin': '10px 13px 0px 7px'
                    }
                }
            };

            that.loadData = function () {
                randomService.get(that.max,function (data) {
                    $log.debug("TestController: got data %o", data);
                    angular.copy(data.values, that.chartData[0].values);
                }, function (error) {
                    // do somethign here
                });
            };

            that.interval = $interval(function () {
                that.loadData();
            }, 5000);

            $scope.$on("$destroy", function () {
                $interval.cancel(that.interval);
            })

            that.loadData();

        }
    ]);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/test", {
                    templateUrl: "views/test.html",
                    controller: "TestController",
                    controllerAs: "testCtrl"
                });
        }
    ]);

})();