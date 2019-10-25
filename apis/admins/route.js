import adminController from "./controller"
export default route => {
    route.get('/admins', adminController.getList);
    route.post('/admins', adminController.createNewAdmin);
    return route;
};