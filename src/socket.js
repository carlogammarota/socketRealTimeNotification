import { io } from "socket.io-client";
const socket = io('localhost:3000');
// io.origins('*:*') 

// socket.on("notification", (args) => {
//     console.log('nueva data', args)
// });

// export default function () {}
export default socket;



console.log('test')