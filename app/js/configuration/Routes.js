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
        $stateProvider.state('forgotlogin',{
            url:'/forgotlogin',
            templateUrl: "templates/ForgotLogin.html",
            controller: 'ForgotLoginCtrl'
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
                    templateUrl: "templates/AddPet.html",
                    controller: 'AddPetCtrl'
                }
            }
        });
        $stateProvider.state('main.selectpet',{
            url: '/selectpet',
            views: {
                "main": {
                    templateUrl: "templates/SelectPet.html",
                    controller: 'SelectPetCtrl'
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
                    templateUrl: "templates/Confirmation.html",
                    controller: 'ConfirmationCtrl'
                }
            }
        });
        $stateProvider.state('main.pricing',{
            url: '/pricing',
            views: {
                "main": {
                    templateUrl: "templates/Pricing.html",
                    controller: 'PricingCtrl'
                }
            }
        });
        $stateProvider.state('main.payment',{
            url: '/payment',
            views: {
                "main": {
                    templateUrl: "templates/Payment.html",
                    controller: 'PaymentCtrl'
                }
            }
        });
        $stateProvider.state('main.thankYou',{
            url: '/thankyou',
            views: {
                "main": {
                    templateUrl: "templates/ThankYou.html",
                    controller: 'ThankYouCtrl'
                }
            }
        });
        $stateProvider.state('main.call',{
            url: '/call',
            views: {
                "main": {
                    templateUrl: "templates/Call.html",
                    controller: 'CallCtrl'
                }
            }
        });
        $stateProvider.state('main.appointments',{
            url: '/appointments',
            views: {
                "main": {
                    templateUrl: "templates/Appointments.html",
                    controller: 'AppointmentsCtrl'
                }
            }
        });
        $stateProvider.state('main.apptrequest',{
            url: '/apptrequest',
            views: {
                "main": {
                    templateUrl: "templates/AppointmentRequest.html",
                    controller: 'ApptrequestCtrl'
                }
            }
        });
        $stateProvider.state('main.notifications',{
            url: '/notifications',
            views: {
                "main": {
                    templateUrl: "templates/Notifications.html",
                    controller: 'NotificationsCtrl'
                }
            }
        });
        $stateProvider.state('main.settings',{
            url: '/settings',
            views: {
                "main": {
                    templateUrl: "templates/Settings.html",
                    controller: 'SettingsCtrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
});

