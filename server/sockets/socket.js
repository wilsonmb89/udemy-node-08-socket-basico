const { io } = require('../server'); 

io.on('connection', (client) => {
  console.log('Usuario conectado:');
  client.on('disconnect', () => {
      console.log('Cliente se ha desconectado');
  });
  client.on('enviarMensaje', (data) => {
      console.log('Mensaje recibido:', data);
  });
  client.emit('respuestaMensaje', { mensaje: 'Saludos terricola' });
  client.on('saludameServer', (req, callback) => {
      callback(`Hola ${req.nombre}`);
  });
  client.on('saludarTodos', (data, callback) => {
    callback({ok: true});
    client.broadcast.emit('saludarTodos', { mensaje: `${data.nombre} los saluda`});
  });
});