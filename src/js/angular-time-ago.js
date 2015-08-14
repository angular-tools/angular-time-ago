(function () {

    'use strict';

    angular.module('angularTimeAgo', [])
        .filter('timeAgo', function () {
            return function (value) {
                var now = moment(value);
                return now.fromNow();
            };
        });
})();