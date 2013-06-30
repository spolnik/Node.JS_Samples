var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message){
    chatlog.push(message);
});

chat.on('join', function(login) {
   users.push(login);
});

chat.emit('join', 'Jacek');
chat.emit('message', 'Hello there!');
