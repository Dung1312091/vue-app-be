import express from 'express';
import morgan from "morgan";
import routers from './routers';
import {
    middleware
} from './middleware/express';
import Log from "./libs/log"
const app = express()
const port = 3000

//middleware

app.use(morgan('dev'))

middleware.handleResponse(app);
//route
app.get('/', (req, res) => res.send('Hello World!'))
routers(app);
app.listen(port, () => Log.success(`Example app listening on port ${port}!`))