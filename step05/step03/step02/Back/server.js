import dbroutes from './routes.js'
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
            
/*
 
*/
const app = express();
const PORT = 3000;
/* const corsOptions = {
    credentials: true,
    origin: "http://localhost:8080",
    $exposedHeaders: ["X-Filename"]
};
*/
app.use(cors( { origin: "http://localhost:8080"}));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


/*
app.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
app.on('SIGINT', function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, 'SIGINT');
});
*/
app.use('', dbroutes);

app.listen(
  PORT,
  () => console.log(`its alive on http://localhost:${PORT}`)
);

export default app;