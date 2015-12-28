var app = angular.module('first',[]);
app.controller('AppCtrl',function($scope, $http) {
var refresh = function() {

    $http.get('/contactlist').success(function(response) {
        console.log("i got the data i requested");
        $scope.contactlist = response;//put the data in index.html
        $scope.contact = '';
        
    });
    };
    refresh();
    
    
    $scope.addContact=function() {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
            
        });
    
        
    };
    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id).success(function(response){
            refresh();
        });
        
        
        
    };
    $scope.edit = function(id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function(response){
            $scope.contact = response;
        });
    };
    
   
    
    
    
    
    
});
