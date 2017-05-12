var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.logInShow = true;
  $scope.directoryShow = true;
  $scope.buildingShow = true;
  $scope.projectShow = true;
  $scope.projectArchivesShow = true;
});

app.controller('LoginCtrl', function($scope) {
  $scope.feedback = '';
  $scope.username = 'Username';
  $scope.password = 'Password';
  
    $scope.clickSIGNIN = function () { 
      $scope.feedback = 'You have successfully logged in!'; 
      
      //if login is successful say so
      //else the if below
      if(($scope.user == '') && ($scope.pword == '')){
        $scope.feedback = 'Empty Username and Password';
      }
      else if($scope.user == ''){
        $scope.feedback = 'Empty Username';
      }
      else if($scope.password == ''){
        $scope.feedback = 'Empty Password';
      }
      else{
        //invalid login
      }
    }
     
    $scope.clickCANCEL = function () {
      /*Reset text in input fields and feedback*/
      $scope.username = 'Username';
      $scope.password = 'Password';
      $scope.user = '';
      $scope.pword = '';
      $scope.feedback = ''; }
});
