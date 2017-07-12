

(function(){

	"use strict";

	angular
		.module('ngStars')
		.factory('starsFactory', function($http){

			var obj = {};
			obj.getStars = function(){
				return $http.get('data/stars.json');
			}
			return obj;
		});

})();
