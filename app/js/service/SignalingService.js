angular.module(AppConfig.name)
    .factory('signalingService', function (socketFactory) {
        var socketEndPoint = 'http://172.16.16.177:3000/'
            , socket= io.connect(socketEndPoint);

        var socketFactory = socketFactory({
            ioSocket: socket
        });
        socketFactory.establishConnection = function () {
            socketFactory.connect(socketEndPoint);
        };
        return socketFactory;
    });