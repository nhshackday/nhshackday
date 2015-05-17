'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('FeedbackIndexController', function ($scope){

});

myAppControllers.controller('FeedbackValidationController', function ($scope, $location, Hospital, Validation){
  $scope.gender_options = [
    {text: "Male", value: 0},
    {text: "Female", value: 1},
  ];

  $scope.findHospital = function(formData){
    $scope.hospitals = "No hospital found";
    if(formData){
      Hospital.get(formData.name);
    } else {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.body))
          .title('Name Empty')
          .content('Please enter a hospital name to search.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
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
          .parent(angular.element(document.body))
          .title('Form Empty')
          .content('Please enter details to send.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    }   
  };  
});

myAppControllers.controller('FeedbackFormController', function ($scope, $location, Form){
  $scope.processForm = function(formData){
    if(formData){
      formData.reference = ("patient_ref" + (Math.random()*10000000)).replace(".","")
      Form.set(formData);
      $location.path( "/feedback/complete" ); 
    } else {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.body))
          .title('Form Empty')
          .content('Please enter details to send.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    }  
  };  
});

myAppControllers.controller('FeedbackCompleteController', function ($scope, Feedback){
  Feedback.send();
  $scope.reference = localStorage.reference;
});

myAppControllers.controller('FeedbackEditController', function ($scope){

});