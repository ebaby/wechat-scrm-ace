define(["require","angular"],function(require,ng){
	var module = ng.module("app.layout");
	module.controller('LayoutCtrl', ['$scope', function($scope){
		// $scope.tooltip=function(){


		// 	if ($('body').hasClass('sidebar-collapsed')) {
		//     	$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', true, true);
		//     } else {
		//     	$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', false, true);
		//     }

		// };

		$scope.rootMenus = [{id:1,name:'menu1',url:''},{id:2,name:'menu2',url:''},{id:3,name:'menu3',url:''}];
		$scope.nextMenus = [{id:1,parentid:1,name:'menu1_1',url:'app.cloud'},{id:2,parentid:1,name:'menu1_2'},{id:3,parentid:1,name:'menu1_3'}];

		$scope.init=function(){

		};

		console.log($("#wrapper").height());

		$scope.getNextMenus=function(id){
			for(var key in nextMenus){
				if(key.parentid===id){


				}

			}

		};

	}])
});