const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

const routes = require('./routes');

mongoose.connect('mongodb+srv://DevRadar:DevRadar@cluster0-sg3qs.mongodb.net/DevRadar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);