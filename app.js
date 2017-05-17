var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.logInShow = true;
  $scope.directoryShow = true;
  $scope.buildingShow = true;
  $scope.projectShow = true;
  $scope.projectArchivesShow = true;

  $scope.feedback = '';
  $scope.target = 'https://happybuildings.sim.vuw.ac.nz/api/aguinarani/user_list.json';
  $http.get($scope.target).then(function(response) {
    $scope.usersList = response.data.users;
    $scope.feedback = 'File reading successful';
  }, function() {
    $scope.feedback = 'Error reading file';
  });

  
  /*------- Login Form -------*/
  
  $scope.username = 'Username';
  $scope.password = 'Password';
  $scope.user = '';
  $scope.pword = '';
  //when sign in has been clicked
  $scope.clickSIGNIN = function() {
    if (($scope.user === '') && ($scope.pword === '')) {
      $scope.feedback = 'Empty Username and Password';
    } else if ($scope.user === '') {
      $scope.feedback = 'Empty Username';
    } else if ($scope.pword === '') {
      $scope.feedback = 'Empty Password';
    } else {
      //fields are not empty so traverse through the list
      for (var i in $scope.usersList) {
        if (($scope.usersList[i].LoginName === $scope.user) && ($scope.usersList[i].Password === $scope.pword)) {
          alert('You have successfully logged in!');
          $scope.logInShow = false;
          $scope.directoryShow = true;
          break;
        } else {
          $scope.feedback = 'Incorrect Login!';
        }
      }
    }

  }

  $scope.clickCANCEL = function() {
    /*Reset text in input fields and feedback*/
    $scope.username = 'Username';
    $scope.password = 'Password';
    $scope.user = '';
    $scope.pword = '';
    $scope.feedback = '';
  }
  
  /*--------------------------*/
  
  
  
  /*----- Directory Form -----*/
  
  
  
  /*--------------------------*/
  
  
  
  /*----- Building Form ------*/
  
  
  
  /*--------------------------*/
  
  
  
  /*------ Project Form ------*/
  
  
  
  /*--------------------------*/
  

});
