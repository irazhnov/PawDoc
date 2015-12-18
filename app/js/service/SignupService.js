angular
    .module(AppConfig.name)
    .service('signupService',[function () {
        return {
            signupModel: {
                isTermsAcepted:false
            }
        }

    }]);