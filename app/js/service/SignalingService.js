angular.module(AppConfig.name)
    .factory('signalingService', function (socketFactory) {
        var socket = io.connect('http://172.16.16.177:3000/');

        var socketFactory = socketFactory({
            ioSocket: socket
        });
        return socketFactory;
    });