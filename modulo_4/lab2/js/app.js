angular.module('initial_spi', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){

    /*
     * `when()` cuantas veces sea necesario
     * `otherwise()` una sola vez "OJO"
    */
      $routeProvider

                   
        .when('/message/one', 
            {
                templateUrl: "home.html"
            })
            
            .when('/message/three', 
            {
                templateUrl: "contact.html"
            })
            .when('/message/two', 
            {
                templateUrl: "abaut.html"
            })
           .when('/product',
           {
                templateUrl:'productos.html'
           })
        
        .otherwise({
            redirectTo: '/',
            templateUrl: 'otherwise.html'
        });

    }])
.controller('controller_one', ['$scope', function($scope){
    $scope.simple_names = ["Starcraft", "Diablo III", "Wow Legion","heroes of the storm","hearthstone"];
    /*$scope.languages = [
    {
        name: "VB.NET",
        jerarquia: "PRIMERO"
    },
    {
        name: "C#.NET",
        jerarquia: "SEGUNDO"
    },
    {
        name: "ASP.NET",
        jerarquia: "TERCERO"
    },
    {
        name: "PHP",
        jerarquia: "CUARTO"
    },
    {
        name: "PYTON",
        jerarquia: "QUINTO"
    },
    {
        name: "DELPHI",
        jerarquia: "SEXTO"
    }
    ];*/
}])
.controller('ItemWhyJSON', function($scope, $http){
var url = "db/data.json";
$http.get(url).success(function(response){
    
        console.log(response);
        
    $scope.produc = response;
    });
});