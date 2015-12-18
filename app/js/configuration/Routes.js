angular
    .module('routes', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/',{
            templateUrl: "templates/Main.html",
            controller: 'MainCtrl',
            controllerAs: 'main'
        });
        $routeProvider.when('/login',{
            templateUrl: "templates/Login.html",
            controller: 'LoginCtrl',
            controllerAs: 'login'
        });
        $routeProvider.when('/signup',{
            templateUrl: "templates/Signup.html",
            controller: 'SignupCtrl',
            controllerAs: 'signup'
        });
        $routeProvider.when('/addpet',{
            templateUrl: "templates/AddPet.html",
            controller: 'AddPetCtrl',
            controllerAs: 'addpet'
        });
        $routeProvider.when('/selectpet',{
            templateUrl: "templates/SelectPet.html",
            controller: 'SelectPetCtrl',
            controllerAs: 'selectpet'
        });
        $routeProvider.otherwise('/');
});

