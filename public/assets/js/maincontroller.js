app.controller("MainController", function($scope, $http){
  $scope.newRegistrant = {};
  var load = function(){
      $http.get("/").then(function(data){
      $scope.registrants = data.data.guests;
    },function(){
      alert("OMG ERROR");
    });
  }

  load();

  $scope.addRegistrant = function(){
    var data = {
      name: $scope.newRegistrant.name,
      email: $scope.newRegistrant.email,
    };
    $http.post(`/?name=${data.name}&email=${data.email}`, data).then(function(data, status, headers){
      $scope.alert = data.data;
      load();
    },function(){
      alert("OMG ERROR ADDING");
    });
  }

  $scope.removeRegistrant = function(email){
    $http({method: 'DELETE', url: `/${email}`}).then(function(data){
      $scope.alert = data.data;
      load();
    },function(){
      alert("OMG ERROR ADDING");
    });
  }

});
