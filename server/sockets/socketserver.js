export const setupSockets = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.on('joinChat', (userId) => {
      socket.join(`user_${userId}`);
    });
    
    socket.on('sendMessage', (data) => {
      io.to(`user_${data.receiverId}`).emit('newMessage', {
        message: data.message,
        senderId: data.senderId,
        timestamp: new Date()
      });
    });
    
    socket.on('supportMessage', (data) => {
      if (data.from === 'user') {
        // forward to admin support room
        io.to('support_room').emit('supportMessage', data);
      } else {
        io.to(`user_${data.userId}`).emit('supportMessage', data);
      }
    });
    
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};