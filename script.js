angular.module('test', [])
  .controller('testController', ['$scope', function($scope) {

     

    $scope.clear = function() {
      $scope.begin = "";
      $scope.end = "";
      $scope.message ="";
      
    }

    $scope.submit = function() {
      $scope.message = "You have successfully submitted the data."
    }
    
   

  }]);