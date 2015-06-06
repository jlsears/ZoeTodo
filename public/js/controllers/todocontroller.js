  controllers.controller('TodoCtrl', function ($scope, $http) {
    $scope.message = "Todo!"
    $scope.todo={};

    $scope.submit = function(){
      console.log('*****you clicked the button to make a new to do item******')
      $http({
        method: 'POST',
        url: '/api/tasks/',
        data: $scope.todo
    }).
    success(function (data, status, headers, config) {
      console.log('*****you submitted a new task!******', data)
      $scope.user={};
      $scope.showLogin = true;
    }).
    error(function (data, status, headers, config) {
      console.log('*****task post failed******')
    });
  }
});
