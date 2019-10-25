import express from 'express';
import bodyParser from 'body-parser'
import morgan from "morgan";
import routers from './routers';
import {
    middleware
} from './middleware/express';
import MongoDB from './libs/mogodb';
import Log from "./libs/log"
import {DB_HOST, DB_PORT, DB_NAME} from "./configs/mongo";
const app = express()
const port = 3000
const database = new MongoDB(DB_HOST, DB_PORT, DB_NAME);
database.connect();
//middleware

app.use(morgan('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
middleware.handleResponse(app);
//route
app.get('/', (req, res) => res.send('Hello World!'))
routers(app);
app.listen(port, () => Log.success(`Example app listening on port ${port}!`))