(function () {

    'use strict';

    angular.module('angularTimeAgo', [])
        .filter('timeAgo', function () {
            return function (value) {
                var now = moment(value);
                return now.fromNow();
            };
        })
        .filter('timeAgoStr', function () {
            return function (value) {
                var now = moment(new Date(value));
                return now.fromNow();
            };
        });
})();