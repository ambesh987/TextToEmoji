const mongoose =require('mongoose');

class Mongo{
    constructor(){
        this.createMongoConnection();
    }
    createMongoConnection(){
      
        mongoose.connect(`mongodb://localhost:27017/texttoemoji`)
        mongoose.connection.once('open',()=>{
            console.log('connected to the database');
        })
        mongoose.connection.on('error',()=>{
            console.log("couldn't connect to the database");
        })
    }
}
module.exports =Mongo;