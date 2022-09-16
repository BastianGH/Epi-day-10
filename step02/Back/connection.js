import mariadb from 'mariadb';
import dotenv from "dotenv";
import bodyparser from 'body-parser';
import express from 'express';

const app = express();
dotenv.config();
app.use(bodyparser.urlencoded({extended:false}));

const pool = mariadb.createPool({
    host: process.env.HOST,
    user: process.env.USER,
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
