angular
    .module('routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        var currentTemplate
            , templates = {
            selectpet: 'templates/SelectPet.html'
        };
        $stateProvider.state('start',{
            url:'/',
            templateUrl: "templates/Start.html",
            controller: 'StartCtrl'

        });
        $stateProvider.state('/login',{
            templateUrl: "templates/Login.html",
            controller: 'LoginCtrl'
        });
        $stateProvider.state('/signup',{
            templateUrl: "templates/Signup.html",
            controller: 'SignupCtrl'
        });
        $stateProvider.state('main',{
            url:'/main',
            templateUrl: "templates/Main.html",
            controller: 'MainCtrl'
        });
        $stateProvider.state('main.welcome',{
            url: '/welcome',
            views: {
                "main": {
                    templateUrl: "templates/Welcome.html"
                }
            }
        });
        $stateProvider.state('main.addpet',{
            url: '/addpet',
            views: {
                "main": {
                    templateUrl: "templates/AddPet.html"
                }
            }
        });
        $stateProvider.state('main.selectpet',{
            url: '/selectpet',
            views: {
                "main": {
                    templateUrl: "templates/SelectPet.html"
                }
            }
        });



        $urlRouterProvider.otherwise('/');
});

