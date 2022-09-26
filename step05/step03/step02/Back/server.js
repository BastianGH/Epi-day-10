import dbroutes from './routes.js'
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
            

const app = express();
const PORT = 3000;
const corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyparser.json());

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);
app.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  app.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });
app.get(
    '/',
    (req,res) => { res.send('Hello World !');
    res.header("Access-Control-Allow-Origin", "true");
})
app.use('/', dbroutes);

export default app;