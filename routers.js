import Log from './libs/log';
import express from 'express';
import {
    admins
} from "./apis";
//api prefix
const API_PREFIX = "/api/v1"
//define router
const publicRoutes = {};
const authenRoutes = {
    admins
};

export default app => {
    try {
        let publicRoute = express.Router();
        let authenRoute = express.Router();
        //init all router
        Log.success('\n');
        for (let key in publicRoutes) {
            app.use(API_PREFIX, publicRoutes[key](publicRoute));
            Log.success(`${key.toUpperCase()} was inited`);
        }
        for (let key in authenRoutes) {
            app.use(API_PREFIX, authenRoutes[key](authenRoute));
            Log.success(`${key.toUpperCase()} was inited`);
        }
        //message
        Log.success('\nRoute was init');
    } catch (e) {
        Log.error(e);
    }
};