angular
    .module(AppConfig.name)
    .factory('userModel', function () {
        return {
            username:'',
            password:'',
            //username:'SuperPowerUser',
            //password:'MySuperP@ssword!',
            token:''
        }
    });