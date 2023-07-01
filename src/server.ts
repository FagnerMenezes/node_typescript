import express from 'express';
import rota from './routers/router';
import students from './routers/students';
import session from 'express-session';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = '3000'
app.disable('x-powered-by');
app.use( session({
    secret : 's3Cur3',
    name : 'sessionId',
   })
 );

app.use('/',rota);
app.use('/students',students);
app.listen(port, () => console.log("server is running on port",port))