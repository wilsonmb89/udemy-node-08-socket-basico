const socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});
socket.emit('enviarMensaje', {
    usuario: 'Wilson Martinez',
    mensaje: 'Hola mundo'
});
socket.on('respuestaMensaje', function(data) {
    console.log(data);
});
socket.emit('saludameServer', { nombre: 'Wilson Martinez' }, function(res) {
    console.log(res);
});
socket.emit('saludarTodos', {nombre: 'Wilson'}, function(res) {
  console.log('Enviado:', res.ok);
});
socket.on('saludarTodos', function(data) {
  console.log(data.mensaje);
});