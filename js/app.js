(function(angular){
	"use strict"
	angular
		.module("app",[])
		.controller("todoCtrl",["$scope", "$location", function($scope, $location){
			$scope.todoList = [
				{id: 1, content: "我有一只小毛驴我从来也不骑", isCompleted: false},
				{id: 2, content: "有一天我心血来潮骑着去赶集", isCompleted: true},
				{id:3, content: "我手里拿着小皮鞭我心里正得意", isCompleted: false},
				{id: 4, content: "不知怎么哗啦啦啦我摔了一身泥", isCompleted: false},
			]
			//1. 实现添加功能
			$scope.addTodo = function(){
				if($scope.newTodo.trim()==""){
					return false;
				}
				var newTodu = {
					id: $scope.todoList.length==0 ? 1 : $scope.todoList[$scope.todoList.length-1].id+1,
					content: $scope.newTodo,
					isCompleted: false
				}
				$scope.todoList.push(newTodu);
				$scope.newTodo="";
			}
			//2.实现删除功能
			$scope.delTodo = function(id){
				for(var i=0; i<$scope.todoList.length; i++){
					if($scope.todoList[i].id==id){
						$scope.todoList.splice(i, 1);
					}
				}
			}
			//3. 实现编辑功能
			$scope.editTodo = function(id){
				for(var i=0; i<$scope.todoList.length; i++){
					$scope.todoList[i].isEdit=false;
					if($scope.todoList[i].id== id){
						$scope.todoList[i].isEdit=true;
						
					}
				}
			}
			//4. 获取剩余未完成的数量
			$scope.getLeftCount=function(){
				var count=0;
				for(var i=0; i<$scope.todoList.length; i++){
					if(!$scope.todoList[i].isCompleted){
						count++;
					}
				}
				return count;
			}
			//5. 全选操作
			$scope.isCheckAll=false;
			$scope.checkAll=function(){
				for(var i=0; i<$scope.todoList.length; i++){
					$scope.todoList[i].isCompleted = $scope.isCheckAll;
				}
			}
			//监视下面的li标签
				$scope.$watch("todoList",function(){
					var isCompleted = $scope.todoList.every(function(v){
						return v.isCompleted;
					})
					$scope.isCheckAll=isCompleted;
				},true)
			//6. 清除所有已经完成的内容
			$scope.clearCompleted=function(){
				var todoList=[];
				for(var i=0; i<$scope.todoList.length; i++){
					if(!$scope.todoList[i].isCompleted){
						todoList.push($scope.todoList[i])
					}
				}
				$scope.todoList=todoList;
			}
			//7. 点击状态按钮进行筛选
			var status=undefined;
			//8. 获取hash值, 显示不同内容
			$scope.$location=$location;
			$scope.$watch("$location.url()",function(n){
				switch (n){
					case  "/":
					$scope.status=undefined;
						break;
					case  "/active":
					$scope.status=false;
						break;
					case  "/completed":
					$scope.status=true;
						break;

				}
			})
		}])
})(angular)