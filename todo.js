function TodoCtrl($scope) {
	

	$scope.todos = [
		{text:'Learn AngularJs', done:false},
		{text: 'Build an app', done:false}
		];
$scope.totalTodos = $scope.todos.length;

		$scope.addTodo = function () {
			$scope.todos.push({text:$scope.formTodoText, done: false});
			$scope.formTodoText = '';
		}
}