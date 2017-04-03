angular.module('devmtnTravel')
  .controller('packagesCtrl',['$scope','mainSrv','$stateParams',function($scope,mainSrv,$stateParams){


    $scope.test = 'test';
    $scope.packageInfo = mainSrv.packageInfo;

  }])
