var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.feedback = '';
  $scope.username = 'Username';
  $scope.password = 'Password';
  
    $scope.clickSIGNIN = function () { 
      $scope.feedback = 'You have successfully logged in!'; }
     
    $scope.clickCANCEL = function () {
      /*Reset text in input fields and feedback*/
      $scope.username = 'Username';
      $scope.password = 'Password';
      $scope.user = '';
      $scope.pword = '';
      $scope.feedback = ''; }
});
