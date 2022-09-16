import dbroutes from './routes.js'
import express from 'express';
            
const app = express();
const PORT = 3000;

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);
app.get(
    '/',
    (req,res) => { res.send('Hello World !');
})
app.use('/', dbroutes);

export default app;