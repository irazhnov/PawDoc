angular
    .module(AppConfig.name)
    .factory('userModel', function () {
        return {
            username:'SuperPowerUser',
            password:'MySuperP@ssword!',
            token:''
        }
    });