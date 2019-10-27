import jwt from "jsonwebtoken";
export const JWT = {
    SECRET_REFRESH: "vue-app-secret-refesh-key",
    SECRET: "vue-app-secret-key",
    ALG: 'HS256',
    typ: 'JWT',
    EXPIRE_ACCESS_TOKEN: 60 * 60, //1h
    EXPIRE_REFRESH_TOKEN: 60 * 60 * 24, // 1 day,
    REGEX_FORMAT: /\b(Bearer) (\S+)\b$/g
};

export function ganerateToken(payload) {
    return jwt.sign({
        data: payload,
    }, JWT.SECRET, {
        expiresIn: JWT.EXPIRE_ACCESS_TOKEN
    });
}

export function ganerateRefeshToken(payload) {
    return jwt.sign({
        data: payload,
    }, JWT.SECRET_REFRESH, {
        expiresIn: JWT.EXPIRE_REFRESH_TOKEN
    });
}