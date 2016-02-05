angular.module(AppConfig.name)
    .factory('signalingService', function (socketFactory) {
        var socketEndPoint = 'http://172.16.16.177:3000/',
            socket= io.connect(socketEndPoint);

        var socketFactoryInstance = socketFactory({
            ioSocket: socket
        });
        socketFactoryInstance.establishConnection = function () {
            socketFactoryInstance.connect(socketEndPoint);
        };
        return socketFactoryInstance;
    });