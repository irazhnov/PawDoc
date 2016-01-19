angular
    .module(AppConfig.name)
    .controller('VideoCtrl', function ($scope, $rootScope, $state, signalingService, contactsService, $timeout, uiService) {
        $scope.model = {name: 'office'};
        $scope.loading = false;

        var duplicateMessages = [];

        $scope.callInProgress = false;

        $scope.isWaitCall = true;//$stateParams.isCalling === 'true';
        //$scope.contactName = $stateParams.contactName;

        $scope.allContacts = contactsService.onlineUsers;
        $scope.contacts = {};
        $scope.hideFromContactList = [$scope.model.name];
        $scope.muted = false;

        $scope.connect = function () {
            $scope.loading = true;
            $scope.hideFromContactList = [$scope.model.name];
            signalingService.disconnect();
            signalingService.establishConnection();
            //$scope.contactName = $scope.model.name;
            $timeout(function () {
                signalingService.emit('login', $scope.model.name);
            },200);
        };

        signalingService.on('login_error', function (message) {
            $scope.loading = false;
            window.plugins.toast.show(message ,'long','center');
            //var alertPopup = $ionicPopup.alert({
            //    title: 'Error',
            //    template: message
            //});
        });

        signalingService.on('login_succesful', function (users) {
            contactsService.setOnlineUsers(users, $scope.model.name);
            console.log('signaling login_successful ' + $scope.model.name);
            //$state.go('app.contacts');
        });

        $scope.onlineUsers = contactsService.onlineUsers;

        //if ($scope.isCalling) {
        //    signalingService.emit('sendMessage', $stateParams.contactName, { type: 'call' });
        //}

        $scope.ignore = function () {
            var contactNames = Object.keys($scope.contacts);
            if (contactNames.length > 0) {
                $scope.contacts[contactNames[0]].disconnect();
            } else {
                signalingService.emit('sendMessage', $scope.contactName, { type: 'ignore' });
                console.log('ignore:  $state.go(app.contacts');
                //$state.go('app.contacts');
            }
            $scope.isWaitCall = true;
        };

        $scope.end = function () {
            Object.keys($scope.contacts).forEach(function (contact) {
                $scope.contacts[contact].close();
                delete $scope.contacts[contact];
            });
            $scope.callInProgress = false;
        };

        $scope.answer = function () {

            if ($scope.callInProgress) { return; }

            $scope.callInProgress = true;
            $timeout($scope.updateVideoPosition, 1000);

            call(false, $scope.contactName);

            setTimeout(function () {
                console.log('sending answer ' + $scope.contactName +   ' vs ' + $scope.model.name);
                signalingService.emit('sendMessage', $scope.contactName, { type: 'answer' });
            }, 1500);
        };

        $scope.updateVideoPosition = function () {
            $rootScope.$broadcast('videoView.updatePosition');
        };

        $scope.openSelectContactModal = function () {
            console.log('cordova.plugins.phonertc.hideVideoView()');
            if($rootScope.deviceReady)
            cordova.plugins.phonertc.hideVideoView();
            //$scope.selectContactModal.show();
        };

        $scope.closeSelectContactModal = function () {
            console.log('cordova.plugins.phonertc.showVideoView()');
            if($rootScope.deviceReady)
            cordova.plugins.phonertc.showVideoView();
            //$scope.selectContactModal.hide();
        };

        $scope.addContact = function (newContact) {
            console.log('sendMessage  to:   ' + newContact);
            //$scope.hideFromContactList.push(newContact);
            signalingService.emit('sendMessage', newContact, { type: 'call' });
            if($rootScope.deviceReady)
            cordova.plugins.phonertc.showVideoView();
            //$scope.selectContactModal.hide();
        };

        $scope.hideCurrentUsers = function () {
            return function (item) {
                return $scope.hideFromContactList.indexOf(item) === -1;
            };
        };

        $scope.toggleMute = function () {
            $scope.muted = !$scope.muted;

            Object.keys($scope.contacts).forEach(function (contact) {
                var session = $scope.contacts[contact];
                session.streams.audio = !$scope.muted;
                session.renegotiate();
            });
        };

        function call(isInitiator, contactName) {
            console.log(new Date().toString() + ': calling to ' + contactName + ', isInitiator: ' + isInitiator);

            var config = {
                isInitiator: isInitiator,
                turn: {
                    host: 'turn:192.168.2.28:3478',
                    username: 'ubuntu',
                    password: 'VP_0ln'
                },
                streams: {
                    audio: true,
                    video: true
                }
            };
            var session = new cordova.plugins.phonertc.Session(config);

            session.on('sendMessage', function (data) {
                console.log('session .on(sendMessage)' + JSON.stringify(data));
                signalingService.emit('sendMessage', contactName, {
                    type: 'phonertc_handshake',
                    data: JSON.stringify(data)
                });
            });

            session.on('answer', function () {
                console.log('session   Answered!');
            });

            session.on('disconnect', function () {
                console.log('session    on (disconnect)');
                if ($scope.contacts[contactName]) {
                    delete $scope.contacts[contactName];
                }

                if (Object.keys($scope.contacts).length === 0) {
                    signalingService.emit('sendMessage', contactName, { type: 'ignore' });
                    console.log('on disconnect:    $state.go(app.contacts');
                    $scope.callInProgress = false;
                    $scope.isWaitCall = true;
                }
                if($rootScope.deviceReady) {
                    AudioToggle.setAudioMode(AudioToggle.EARPIECE);
                    chrome.power.releaseKeepAwake('display');
                }
            });

            session.call();

            console.log('contacts[contactName]=  ' + contactName);
            $scope.contacts[contactName] = session;
        }

        function onMessageReceive (name, message) {
            switch (message.type) {
                case 'call':
                    if ($scope.model.name === name) { return; }

                    //$state.go('app.call', { isCalling: false, contactName: name });
                    $scope.contactName = name;
                    $scope.isWaitCall = false;
                    break;
                case 'answer':
                    console.log('onMessageReceive   answer');
                    $scope.$apply(function () {
                        $scope.callInProgress = true;
                        $timeout($scope.updateVideoPosition, 1000);
                    });

                    var existingContacts = Object.keys($scope.contacts);
                    if (existingContacts.length !== 0) {
                        signalingService.emit('sendMessage', name, {
                            type: 'add_to_group',
                            contacts: existingContacts,
                            isInitiator: false
                        });
                    }

                    call(true, name);
                    break;

                case 'ignore':
                    var len = Object.keys($scope.contacts).length;
                    if (len > 0) {
                        if ($scope.contacts[name]) {
                            $scope.contacts[name].close();
                            delete $scope.contacts[name];
                        }

                        var i = $scope.hideFromContactList.indexOf(name);
                        if (i > -1) {
                            $scope.hideFromContactList.splice(i, 1);
                        }
                        if (Object.keys($scope.contacts).length === 0) {

                            //$state.go('app.contacts');
                        }
                    } else {
                        console.log('22   $state.go(app.contacts);');
                        //$state.go('app.contacts');
                    }
                    if($rootScope.deviceReady) {
                        AudioToggle.setAudioMode(AudioToggle.EARPIECE);
                        chrome.power.releaseKeepAwake('display');
                    }
                    break;
                case 'phonertc_handshake':
                    console.log('phonertc_handshake ' + $scope.contacts[name]);
                    console.log('name' + name);
                    if (duplicateMessages.indexOf(message.data) === -1) {
                        $scope.contacts[name].receiveMessage(JSON.parse(message.data));
                        duplicateMessages.push(message.data);
                    }
                    if($rootScope.deviceReady) {
                        AudioToggle.setAudioMode(AudioToggle.SPEAKER);
                        chrome.power.requestKeepAwake();
                    }
                    break;
                case 'add_to_group':
                    console.log('add_to_group');
                    message.contacts.forEach(function (contact) {
                        $scope.hideFromContactList.push(contact);
                        call(message.isInitiator, contact);

                        if (!message.isInitiator) {
                            $timeout(function () {
                                signalingService.emit('sendMessage', contact, {
                                    type: 'add_to_group',
                                    contacts: [contactsService.currentName],
                                    isInitiator: true
                                });
                            }, 1500);
                        }
                    });

                    break;
            }
        }
        signalingService.on('messageReceived', onMessageReceive);

        $scope.$on('$destroy', function() {
            signalingService.removeListener('messageReceived', onMessageReceive);
        });
        //uiService.setHeaderTitle('Video Conference');
    });