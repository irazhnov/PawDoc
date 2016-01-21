angular
    .module(AppConfig.name)
    .factory('signupModel', function () {
        return {
            data: {
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
            error: {
                userName: false,
                firstName: false,
                lastName: false,
                password: false,
                confirmPassword: false,
                country: false,
                email: false,
                dateOfBirth: false

            },
            isValid: function (field) {
                var reason = '';
                switch (field) {
                    case 'firstName':
                        this.error[field] = this.data[field].length == 0;
                        reason += 'First name is empty.\n';
                        break;
                    case 'lastName':
                        this.error[field] = this.data[field].length == 0;
                        reason += 'Last name is empty.\n';
                        break;
                    case 'password':
                    case 'confirmPassword':
                        if (this.data.password != this.data.confirmPassword) {
                            reason += 'Password and confirm password don\'t match.\n';
                            this.error.password = true;
                            this.error.confirmPassword = true;
                        }
                        if (!/[;,"?<>{}&%$@!*.#_'A-Za-z0-9](.....)/.test(this.data[field])){
                            this.error[firstName] = true;
                            reason += 'Password should have small and Capital letters. Digits and symbols. The length should be not less 6 symbols.\n';
                        }

                        break;
                    case 'email':
                        if(!/@/.test(this.data[field])){
                            reason += 'Input correct email adress.';
                            this.error[firstName] = true;
                        }
                    break;
                    case 'dateOfBirth':

                        break;
                }
            },
            isValidAfterSubmit:function () {
                this.error[firstName] = this.data.password == this.data.confirmPassword;
            },
            cleanErrors: function() {
                for(var key in this.error){
                    this.error[key] = false;
                }
            }
        }
    });