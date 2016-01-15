angular.module(AppConfig.name)
    .controller('VideoCallCtrl', function ($scope, $state, $rootScope, $timeout, $stateParams, signalingService, contactsService) {
        var duplicateMessages = [];

        $scope.callInProgress = false;

        $scope.isCalling = $stateParams.isCalling === 'true';
        $scope.contactName = $stateParams.contactName;

        $scope.allContacts = contactsService.onlineUsers;
        $scope.contacts = {};
        $scope.hideFromContactList = [$scope.contactName];
        $scope.muted = false;

        //$ionicModal.fromTemplateUrl('templates/select_contact.html', {
        //    scope: $scope,
        //    animation: 'slide-in-up'
        //}).then(function(modal) {
        //    $scope.selectContactModal = modal;
        //});

        function call(isInitiator, contactName) {
            console.log(new Date().toString() + ': calling to ' + contactName + ', isInitiator: ' + isInitiator);

            var config = {
                isInitiator: isInitiator,
                turn: {
                    host: 'turn:192.168.1.107:3478',
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
                signalingService.emit('sendMessage', contactName, {
                    type: 'phonertc_handshake',
                    data: JSON.stringify(data)
                });
            });

            session.on('answer', function () {
                console.log('Answered!');
            });

            session.on('disconnect', function () {
                if ($scope.contacts[contactName]) {
                    delete $scope.contacts[contactName];
                }

                if (Object.keys($scope.contacts).length === 0) {
                    signalingService.emit('sendMessage', contactName, { type: 'ignore' });
                    console.log('on disconnect:    $state.go(app.contacts');
                    //$state.go('app.contacts');
                }
            });

            session.call();

            $scope.contacts[contactName] = session;
        }

        if ($scope.isCalling) {
            signalingService.emit('sendMessage', $stateParams.contactName, { type: 'call' });
        }

        $scope.ignore = function () {
            var contactNames = Object.keys($scope.contacts);
            if (contactNames.length > 0) {
                $scope.contacts[contactNames[0]].disconnect();
            } else {
                signalingService.emit('sendMessage', $stateParams.contactName, { type: 'ignore' });
                console.log('ignore:  $state.go(app.contacts');
                //$state.go('app.contacts');
            }
        };

        $scope.end = function () {
            Object.keys($scope.contacts).forEach(function (contact) {
                $scope.contacts[contact].close();
                delete $scope.contacts[contact];
            });
        };

        $scope.answer = function () {
            if ($scope.callInProgress) { return; }

            $scope.callInProgress = true;
            $timeout($scope.updateVideoPosition, 1000);

            call(false, $stateParams.contactName);

            setTimeout(function () {
                console.log('sending answer');
                signalingService.emit('sendMessage', $stateParams.contactName, { type: 'answer' });
            }, 1500);
        };

        $scope.updateVideoPosition = function () {
            $rootScope.$broadcast('videoView.updatePosition');
        };

        $scope.openSelectContactModal = function () {
            console.log('cordova.plugins.phonertc.hideVideoView()');
            cordova.plugins.phonertc.hideVideoView();
            //$scope.selectContactModal.show();
        };

        $scope.closeSelectContactModal = function () {
            console.log('cordova.plugins.phonertc.showVideoView()');
            cordova.plugins.phonertc.showVideoView();
            //$scope.selectContactModal.hide();
        };

        $scope.addContact = function (newContact) {
            $scope.hideFromContactList.push(newContact);
            signalingService.emit('sendMessage', newContact, { type: 'call' });

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

        function onMessageReceive (name, message) {
            switch (message.type) {
                case 'answer':
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
                            $state.go('app.contacts');
                        }
                    } else {
                        $state.go('app.contacts');
                    }

                    break;

                case 'phonertc_handshake':
                    if (duplicateMessages.indexOf(message.data) === -1) {
                        $scope.contacts[name].receiveMessage(JSON.parse(message.data));
                        duplicateMessages.push(message.data);
                    }

                    break;

                case 'add_to_group':
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
    });