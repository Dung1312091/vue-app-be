import {
    getList
} from './controller';
export default route => {
    route.get('/admins', getList);
    return route;
};