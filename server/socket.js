var app = require('../node_modules/express')();
var http = require('http').Server(app);
var io = require('../node_modules/socket.io/lib')(http);
var _ = require('../node_modules/lodash');

var users = [];

app.get('/', function (req, res){
    res.sendfile('index.html');
});

io.on('connection', function (socket) {
    socket.on('login', function (name) {
        // if this socket is already connected,
        // send a failed login message+
        console.log('get login socket.id: ' + socket.id);
        console.log('get login name: ' +  name);
        if(_.findIndex(users, {socket:socket.id})!== -1){
            socket.emit('login_err', 'You are already connected.');
        }

        // if this name is already registered,
        // send a failed login message
        if(_.findIndex(users, {name:name})!==-1) {
            socket.emit('login_err', 'This name already exists.');
            return;
        }
        users.push({
            name:name,
            socket:socket.id
        });
        console.log('emit login_succesful');
        socket.emit('login_succesful', _.pluck(users, 'name'));
        socket.broadcast.emit('online', name);

        console.log(name + ' logged in');
    });
    
    socket.on('sendMessage', function (name, message) {
        var currentUser = _.find(users, {socket: socket.id});
        if(!currentUser) {
            return;
        }
        var contact = _.find(users, {name:name});
        if(!contact) {
            return;
        }
        console.log('messageReceived from: ' + currentUser.name + ' message: ' + message.type);
        io.to(contact.socket).emit('messageReceived', currentUser.name, message);
    });

    socket.on('disconnect', function(){
        var index = _.findIndex(users, {socket: socket.id});
        console.log('on disconnect' + index);
        if (index !== -1){
            socket.broadcast.emit('offline', users[index].name);
            console.log(users[index].name + ' disconnected');
            users.splice(index,1);
        }
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});