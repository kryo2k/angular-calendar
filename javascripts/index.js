angular
.module('AngularCalendarApp', ['angular-calendar'])
.controller('IndexCtrl', ['$scope', 'Calendar', 'CalendarVersion', function ($scope, Calendar, CalendarVersion) {

  var beginningOfWeek = 0; // sunday

  $scope.testOffsetMultiplier = 'week';
  $scope.testOffset = -5;

  ($scope.resetCurrentDate = function(){
    $scope.currentDate = new Date();
  })();

  $scope.calendar = new Calendar(beginningOfWeek);
}]);