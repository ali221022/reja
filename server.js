const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://ali221022:ali221022!@cluster0.dhqnc.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(
    connectionString,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
 (err, client) =>  {
   if(err) console.log("ERROR on connection MongoDB");
   else {
    console.log("MongoDB connection succeed");
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
    console.log(
        `The server is running successfully on port localhost:${PORT}, http://localhost:${PORT}`

         );
       }
     );
   }
 }
);
