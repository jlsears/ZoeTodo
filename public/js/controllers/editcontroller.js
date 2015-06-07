  controllers.controller('EditCtrl', function ($scope, $http, $location, taskService) {
        $scope.message = 'Editing here!';
        $scope.todo = {};
        $scope.task = taskService.getTask();

      var postEdit = function () {
        $http({
          method: 'POST',
          url: '/api/tasks',
          data: $scope.task
        }).
        success(function(data, status, headers, config) {
          console.log('**editing action happening!**');
          return $location.path('/todolist')
        }).
        error(function(data, status, headers, config) {
          console.log('**NO editing action**');
        })
      };

      var del = function(editingId) {
        console.log('deleting as part of edit function');
        $http({
          method: 'DELETE',
          url: '/api/tasks/' + editingId,
        }).
        success(function(data, status, headers, config){
          console.log('deletion successful');
        }).
        error(function(data, status, headers, config){
          console.log('no deletion happening')
        })
      };

        $scope.updateTask = function() {
          console.log($scope.task._id);
          del($scope.task._id);
          postEdit();
        };
      }
  );