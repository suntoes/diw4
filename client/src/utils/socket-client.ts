import io from "socket.io-client";

//@ts-ignore
const socket = io.connect(process.env.REACT_APP_URL);

export const listenToSocket = (handler:Function) => {
    socket.on('updatePost', (obj: any) => {
        handler(obj)
    })
}

type pObj = {
    name: String,
    text: String
}

export const emitToSocket = (obj:pObj) => {
    socket.emit('newPost', obj)
}