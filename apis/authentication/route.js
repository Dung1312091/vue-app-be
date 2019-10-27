import authenController from "./controller"
export default route => {
    route.post("/login", authenController.login);
    return route
}