angular.module('lab4', ['ngRoute', 'lab4.controllers', 'lab4.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/data.html'
        })
        .when('/homes', {
            controller: 'lab4Controller',
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});