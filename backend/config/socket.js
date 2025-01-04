const setupSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        socket.on('sendMessage', (data) => {
            console.log('Message received:', data);
            io.emit('receiveMessage', data);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};

module.exports = setupSocket;