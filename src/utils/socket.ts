import { AnyRecord } from "dns";
import { getData, updateData } from "./db";

const socketio = require('socket.io');
const http = require('http');

const socket = (app: any, PORT: number) => {
    const server = http.createServer(app);
    const io = socketio(server);

    io.on('connection', (socket: { on: (arg0: string, arg1: (post:AnyRecord) => Promise<void>) => void;     emit: (arg0: string, arg1: any) => void; }) => {
        console.log('someone log on');
        socket.on('newPost', async(post) => {
            console.log('someone posted');
            const old = await getData();
            if(old) {
                updateData(old.data, post);
            }
            console.log(post)
            io.emit('updatePost', post);
        })
    })

    server.listen(PORT, () => console.log(`diw4 server running on port ${PORT}`))
};

export default socket