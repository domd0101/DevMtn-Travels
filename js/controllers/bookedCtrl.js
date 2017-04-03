angular.module('devmtnTravel')
  .controller('bookedCtrl',['$scope','mainSrv','$stateParams',function($scope,mainSrv,$stateParams){
      $scope.test = 'test';
      $scope.packageInfo = mainSrv.packageInfo;

  }])
