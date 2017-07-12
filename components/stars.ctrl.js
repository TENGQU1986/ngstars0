(function(){

	"use strict";

	angular
		.module('ngStars')
		.controller('starsCtrl', function($scope, $http, starsFactory, $mdSidenav, $mdToast, $mdDialog){

			starsFactory.getStars().then(function(response){
				$scope.stars = response.data;
				$scope.categories = getCategories($scope.stars);

			});

			var contact = {
				name: "Allen",
				phone: "(555)555-5555",
				email:"starTech@gmail.com"
			}


			$scope.openSidebar = function(){
				console.log("idjlaksdjfa;lsdkj");
				$mdSidenav('left').open();//becuase our md-component-id is left

			}
			$scope.openCart = function(){

				$mdSidenav('right').open();//i want to open right-sidebar as a cart

			}

			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}
			$scope.closeCart = function(){
				console.log("123456");
				$mdSidenav('right').close();
			}


			$scope.saveStar = function(star){
				if (star) {
					star.contact = contact;
					$scope.stars.push(star);
					$scope.star = {};
					$scope.closeSidebar();
					showToast("Star saved!");
				}
			}

			$scope.editStar = function(star) {
				$scope.editing = true;
				$scope.openSidebar();
				$scope.star = star;
			}

			$scope.saveEdit = function(){
				$scope.editing = false;
				$scope.star = {};
				$scope.closeSidebar();
				showToast("Edit saved!");
			}

			$scope.deleteStar = function(event, star){

				var confirm = $mdDialog.confirm()
								.title('Are you sure to delete ' + star.title + '?')
								.ok('Yes')
								.cancel('No')
								.targetEvent(event);
				$mdDialog.show(confirm).then(function(){
					var index = $scope.stars.indexOf(star);
					$scope.stars.splice(index, 1);
				});

			}
			$scope.getPrice = function(){
				console.log(star.price);
				$mdDialog.show(confirm).then(function(){
					var index = $scope.stars.indexOf(star);
					$scope.stars.push(index);
				});
			}

			function showToast(message) {
				$mdToast.show(
						$mdToast.simple()
							.content(message)
							.position('top, right')
							.hideDelay(3000)
					);
			}

			function getCategories(stars) {
				var categories = [];

				angular.forEach(stars, function(item){
					angular.forEach(item.categories, function(category){
						categories.push(category);
					});
				});

				return _.uniq(categories);
			}

		});

})();
