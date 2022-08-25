const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// app.use(cors())

//Variables

let usuariosConectados = 0;





//Socket IO

io.on('connection', (socket) => {

    //Express JS
  app.get('/mensaje/:mensaje', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    console.log("mensaje", req.params)
    io.emit("Notification", req.params.mensaje);
    res.send('OK')
  });

  usuariosConectados++;
  io.emit("UsuariosConectados", usuariosConectados);
  console.log('Nuevo usuario conectado');
  console.log('Usuarios Conectados: ', usuariosConectados)
  

  socket.on("disconnect", (reason) => {
    usuariosConectados--;
    io.emit("UsuariosConectados", usuariosConectados);
    console.log('Nuevo usuario desconectado');
    console.log('Usuarios Conectados: ', usuariosConectados)
  });

});




server.listen(3000, () => {
  console.log('listening on *:3000');
});