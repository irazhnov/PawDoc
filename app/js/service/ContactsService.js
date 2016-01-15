angular.module(AppConfig.name)
    .factory('contactsService', function (signalingService) {
        var onlineUsers = [];

        signalingService.on('online', function (name) {
            if (onlineUsers.indexOf(name) === -1) {
                onlineUsers.push(name);
            }
        });

        signalingService.on('offline', function (name) {
            var index = onlineUsers.indexOf(name);
            if (index !== -1) {
                onlineUsers.splice(index, 1);
            }
        });

        return {
            onlineUsers: onlineUsers,
            setOnlineUsers: function (users, currentName) {
                this.currentName = currentName;

                onlineUsers.length = 0;
                users.forEach(function (user) {
                    //if (user !== currentName) {
                        onlineUsers.push(user);
                    //}
                });
            }
        }
    });