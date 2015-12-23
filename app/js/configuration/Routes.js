angular
    .module('routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {


        $stateProvider.state('start',{
            url:'/',
            templateUrl: "templates/Start.html",
            controller: 'StartCtrl'

        });
        $stateProvider.state('login',{
            url:'/login',
            templateUrl: "templates/Login.html",
            controller: 'LoginCtrl'
        });
        $stateProvider.state('signup',{
            url: '/signup',
            templateUrl: "templates/Signup.html",
            controller: 'SignupCtrl'
        });
        $stateProvider.state('owner',{
            url: '/owner',
            templateUrl: "templates/OwnerInfo.html",
            controller: 'OwnerInfoCtrl'
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
                    templateUrl: "templates/Welcome.html",
                    controller: 'WelcomeCtrl'
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
        $stateProvider.state('main.petinfo',{
            url: '/petinfo',
            views: {
                "main": {
                    templateUrl: "templates/PetInfo.html",
                    controller: 'PetInfoCtrl'
                }
            }
        });
        $stateProvider.state('main.currproblem',{
            url: '/currproblem',
            views: {
                "main": {
                    templateUrl: "templates/CurrProblem.html",
                    controller: 'CurrProblemCtrl'
                }
            }
        });
        $stateProvider.state('main.currproblemcont',{
            url: '/currproblemcont',
            views: {
                "main": {
                    templateUrl: "templates/CurrProblemCont.html",
                    controller: 'CurrProblemContCtrl'
                }
            }
        });
        $stateProvider.state('main.medhystory',{
            url: '/medhystory',
            views: {
                "main": {
                    templateUrl: "templates/MedicalHystory.html",
                    controller: 'MedicalHystoryCtrl'
                }
            }
        });
        $stateProvider.state('main.uploadinfo',{
            url: '/uploadinfo',
            views: {
                "main": {
                    templateUrl: "templates/UploadInfo.html",
                    controller: 'UploadInfoCtrl'
                }
            }
        });
        $stateProvider.state('main.confirmation',{
            url: '/confirmation',
            views: {
                "main": {
                    templateUrl: "templates/MedicalHystory.html",
                    controller: 'MedicalHystoryCtrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
});

