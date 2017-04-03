angular.module('devmtnTravel')
  .controller('locationsCtrl',['$scope','mainSrv','$stateParams',function($scope,mainSrv,$stateParams){

    $scope.test = 'test';
    $scope.travelInfo = mainSrv.travelInfo;

  }])
