import jwt from 'jsonwebtoken';
import {
    JWT
} from "../configs/authen"
export default function authenticationMiddleware(req, res, next) {
    const authorization = req.get("Authorization");
    if (authorization) {
        const tokens = authorization.split(JWT.REGEX_FORMAT);
        const token = tokens[2];
        // verifies secret and checks exp
        jwt.verify(token, JWT.SECRET, (err, decoded) => {
            if (err) {
                return res.error('Unauthorized access', 401);
            }
            req.user = decoded;
            next();
        });
    } else {
        return res.error("No token", 'No token provided.', 403);

    }
}