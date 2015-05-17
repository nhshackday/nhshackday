'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('FeedbackIndexController', function ($scope){

});

myAppControllers.controller('FeedbackValidationController', function ($scope, $location, $mdDialog, Hospital, Validation){
  $scope.gender_options = [
    {text: "Male", value: 0},
    {text: "Female", value: 1},
  ];

  $scope.hideRadios = function(hospital_id){
    console.log("in hide radio");
  };

  $scope.findHospital = function(formData){
    $scope.hospitals = "No hospital found";
    if(formData){
      Hospital.get(formData.name);
    } else {
      $mdDialog.show(
        $mdDialog.alert()          
          .title('Name Empty')
          .content('Please enter a hospital name to search.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')          
      );
    }
    // then set a hidden field with id 
  };

  $scope.processForm = function(formData){
    if(formData){
      Validation.set(formData);
      $location.path( "/feedback/form" ); 
    } else {
      $mdDialog.show(
        $mdDialog.alert()          
          .title('Form Empty')
          .content('Please enter details to send.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')          
      );
    }   
  };  
});

myAppControllers.controller('FeedbackFormController', function ($scope, $mdDialog, $location, Form){
  $scope.processForm = function(formData){
    if(formData){
      formData.reference = ("patient_ref" + (Math.random()*10000000)).replace(".","")
      Form.set(formData);
      $location.path( "/feedback/complete" ); 
    } else {
      $mdDialog.show(
        $mdDialog.alert()          
          .title('Form Empty')
          .content('Please enter details to send.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')          
      );
    }  
  };  
});

myAppControllers.controller('FeedbackCompleteController', function ($scope, $location, Feedback){
  Feedback.send();
  $scope.reference = localStorage.reference;
  $scope.gotoIndex = function(){
    $location.path( "/feedback/index" );
  };
});

myAppControllers.controller('FeedbackEditController', function ($scope){

});