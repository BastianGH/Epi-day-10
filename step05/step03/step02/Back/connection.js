import mariadb from 'mariadb';
import dotenv from "dotenv";

dotenv.config();

console.log( process.env.MARIADB_USER );
const pool = mariadb.createPool({
    host: process.env.HOST,
    user: process.env.MARIADB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
pool.getConnection( (err,connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connected lost');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connections');
        }
        if(err.code === 'ECONREFUSED'){
            console.error('Database conneciton refused');
        }
    }
    if(connection) connection.release();
    connection.end();
});

export default pool;
