import {
    MESSAGE
} from '../constains/messages';
import httpStatus from 'http-status';
export const middleware = {
    /*
        ERR: handle for error response,
        success: handle for  success response
      */
    handleResponse: app =>
        app.use((req, res, next) => {
            let resSuccess = (data = null, status = httpStatus.OK) => {
                if (data) {
                    return res.status(status).json({
                        status: true,
                        data
                    });
                }
                return res.status(status).json({
                    status: true
                });
            };

            let resError = (message = MESSAGE.ERROR_MESSAGE_DEFAULT, status = httpStatus.INTERNAL_SERVER_ERROR) => {
                next({
                    message,
                    status
                });
            };
            // add in request
            res.success = resSuccess;
            res.error = resError;
            next();
        }),
    /*
      Handle for unknown URL request to ser ver
    */
    handleNotFoundRequest: app => {
        app.use((req, res, next) => {
            return next(res.error(MESSAGE.NOT_FOUND_ROUTE, httpStatus.NOT_FOUND, false));
        });
    }

};