const http= require('http');
const app = require('./Routes/app');
const ConnectToDB=require("./src/DBConnection/MongoDB");
const PORT=3000;

http.createServer(app).listen(PORT,()=>{
    new ConnectToDB();
    console.log(`server is running on port no ${PORT}`);
})