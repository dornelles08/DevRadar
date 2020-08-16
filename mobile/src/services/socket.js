const socketio = require('socket.io-client');

const socket = socketio('http://192.168.0.83:3333', {
  autoConnect: false,
});

function subdcribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subdcribeToNewDevs,
};