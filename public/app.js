var app = angular.module('food',['ngRoute','ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
//    .when('/', {
//        templateUrl:'views/hometemplate.html',
//        controller:'aboutCtrl'
//    })
    .when('/About', {
        templateUrl:'views/About.html',
        controller:'aboutCtrl'
    })
    .when('/Menu',{
        templateUrl: 'views/Menu.html',
        controller: 'menuCtrl'
    })
    
});