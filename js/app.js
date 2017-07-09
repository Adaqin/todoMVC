(function(angular){
	"use strict"
	angular
		.module("app",[])
		.controller("todoCtrl",["$scope", function($scope){
			$scope.todoList = [
				{id: 1, content: "我有一只小毛驴我从来也不骑", isCompleted: false},
				{id: 2, content: "有一天我心血来潮骑着去赶集", isCompleted: true},
				{id:3, content: "我手里拿着小皮鞭我心里正得意", isCompleted: false},
				{id: 4, content: "不知怎么哗啦啦啦我摔了一身泥", isCompleted: false},
			]


		}])
})(angular)