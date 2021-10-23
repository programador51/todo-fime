import mysql from 'mysql';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jl1731168',
    database:'todofime'
});

connection.connect(e=>{
    if(e){
        console.log(`■ There was an error connecting to DB ${e}`);
        return
    }
    console.log(`■ Connected to db success`);
});

function reconnect(){
    connection.connect(e=>{
        console.log('Reconnecting...');
        if(e){
            console.log(e);
            return;
        }
    })
}

connection.on('error',error=>reconnect());

export default connection;