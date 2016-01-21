angular
    .module(AppConfig.name)
    .service('signupService',['restService', function (restService, signupModel) {
        var self = this;
        return {
            isTermsAcepted:true,
            invalidateReason:'',
            signupModel: {
                userName:'test',
                firstName:'test',
                lastName:'test',
                password: 'Test1!',
                confirmPassword:'Test1!',
                country:{
                    id: 1,
                    name: 'sample string 2'
                },
                email:'irazhnov@gmail.com',
                dateOfBirth: new Date().toISOString()//'1905-03-12T21:00:00.000Z'
            },

        //{
        //    "email": "sample string 1",
        //    "userName": "sample string 2",
        //    "firstName": "sample string 3",
        //    "dateOfBirth": "2016-01-16T11:45:35.7503434+03:00",
        //    "country": {
        //    "id": 1,
        //        "name": "sample string 2"
        //},
        //    "lastName": "sample string 5",
        //    "roleName": "sample string 6",
        //    "password": "sample string 7",
        //    "confirmPassword": "sample string 8"

        //    1905-03-12T21:00:00.000Z
        //}
            isValid: function () {
                var result = true;
                if (this.signupModel.userName.length == 0 || this.signupModel.password.length== 0 || this.signupModel.confirmPassword.length== 0) {
                    window.plugins.toast.show('' ,'long','center');
                    return false;
                }
                if (this.signupModel.password != this.signupModel.confirmPassword){
                    result =  false;
                }
                return result;
            },
            signUp: function () {
                if (!this.isValid()){
                    return;
                }
                //var data = 'email=' + this.signupModel.email +
                //'&userName=' + this.signupModel.userName+
                //'&firstName=' + this.signupModel.firstName +
                //'&lastName=' + this.signupModel.lastName +
                //'&password=' + this.signupModel.password +
                //'&confirmPassword=' + this.signupModel.confirmPassword +
                //'&dateOfBirth=' + new Date().toISOString() +
                //'&country=' + JSON.stringify(this.signupModel.country);  //{id:'+ '1' +',name:' + 'sample string 2' + '}';

                restService.postRequest(AppConfig.hostDev + 'account/register', this.signupModel)
                    .success(function (data) {
                        console.log('');

                    })
                    .error(function (data){
                        console.log(error);
                    });
            }
        }
    }]);