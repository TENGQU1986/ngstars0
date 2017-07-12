var app = angular.module('ngStars',['ngMaterial']); //module from angular Material ->Component Libaray
/*
app.controller('starsCtrl', function($scope) {
	$scope.message = "Good Morning";
	$scope.name = {
		firstName : 'Zayan',
		lastName : 'Nadeem'
	}
	// body...
});
*/

app.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('teal')
	.accentPalette('orange');
});

app.directive('helloWorld', function() {
	return {
		template: '<h1>This is messed up</h1>'
	}
});
