controllers.controller('ListCtrl', function ($scope, $http, $location, taskService) {
  $scope.message = "Todo!";
  $scope.tasks=[];
  $scope.user={};
 
  var getList = function () {
    $http({
      method: 'GET',
      url: '/api/tasks',
    }).
    success(function (data, status, headers, config) {
      console.log('*****just look at this list!******', data)
      return $scope.tasks = data;
    }).
    error(function (data, status, headers, config) {
      console.log('*****list post failed******')
    });
  }
  getList();

  $scope.delete = function (task) {
    console.log('***you clicked the delete button***')
      $http({
      method: 'DELETE',
      url: '/api/tasks/' + task,
      data: $scope.tasks
    }).
    success(function (data, status, headers, config) {
      console.log('**task deleted!**', data)
      getList();
    }).
    error(function (data, status, headers, config) {
      console.log('**deletion failed**')
    });
  };

  $scope.edit = function (task) {
    console.log('**you clicked the edit button**')
      $http({
        method: 'GET',
        url: '/api/tasks/' + task
      }).
    success(function (data, status, headers, config) {
      console.log('**editcontroller step happening!**', data[0]);
      taskService.setTask(data[0]);
      $scope.task = data[0];
      $location.path('/edit');
    }).
    error(function (data, status, headers, config) {
      console.log('**edit step failed**')
    });

  };
});
