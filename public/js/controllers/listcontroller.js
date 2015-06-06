controllers.controller('ListCtrl', function ($scope, $http) {
  $scope.message = "Todo!";
  $scope.tasks=[];
  $scope.user={};
 
  var getList = function () {
    $http({
      method: 'GET',
      url: '/api/tasks'
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
});
