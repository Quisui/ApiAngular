var app = angular.module("FinalApp", ["ngRoute","ngResource"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "AppController",
            templateUrl: "templates/home.html"
        })
        .when("/newRegister",{
            controller: "NewRegisterController",
            templateUrl: "templates/register.html"
        });
});