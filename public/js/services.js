'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', []);

myAppServices.service('Hospital', function($http, $rootScope, $location, $route){
	return {
		get: function(name){
			var data = {
        name: name
      }        
      console.log(data);
		  $http({
        url: "http://nhshackday.liquidbronze.com/site_find",
        method: "POST",
				data: data,
	      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).success(function(data, status, headers, config){
        $rootScope.hospitals = data;
        console.log($rootScope.hospitals);
        $route.reload();
      }).error(function(){
      	return ["No hospital found please search again."];
      });
		}
	}
});

myAppServices.service("Validation", function(){
	return {
		set: function(formData){
      console.log(formData);
      localStorage.name = formData.name;
      localStorage.age = formData.age;
      localStorage.partial_postcode = formData.partial_postcode;
      localStorage.discharge_date = formData.discharge_date;
      localStorage.gender = formData.gender;
		}
	}
});

myAppServices.service("Form", function(){
  return {
    set: function(formData){
      console.log(formData);
      localStorage.pgic = formData.pgic;
      localStorage.vas = formData.vas;
      localStorage.doctor_rating = formData.doctor_rating;
      localStorage.doctor_good = formData.doctor_good;
      localStorage.doctor_bad = formData.doctor_bad;
      localStorage.nurses_rating = formData.nurses_rating;
      localStorage.nurses_good = formData.nurses_good;
      localStorage.nurses_bad = formData.nurses_bad;
      localStorage.food_rating = formData.food_rating;
      localStorage.food_good = formData.food_good;
      localStorage.food_bad = formData.food_bad;
      localStorage.reference = formData.reference;
    }
  }
});

myAppServices.service("Feedback", function($http){
  return {
    send: function(){
      var data = localStorage;
      console.log(data);
      $http({
        url: "http://nhshackday.liquidbronze.com/form_submit",
        method: "POST",
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).success(function(response){  
        console.log(response);
      });
    }
  }
});