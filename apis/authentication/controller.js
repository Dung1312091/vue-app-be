import jwt from "jsonwebtoken";
import adminService from '../admins/service';
import {
  ganerateToken,
  ganerateRefeshToken
} from "../../configs/authen";
async function login(req, res) {
  try {
    const payload = req.body;

    const user = await adminService.findOneAdmin({
      email: payload.email
    })
    console.log("user", user);
    if (user) {
      if (user.comparePassword(payload.password)) {
        const {
          _id,
          name,
          email,
          status
        } = user;
        const accessToken = ganerateToken({
          _id,
          name,
          email,
          status
        });
        const refreshToken = ganerateRefeshToken({
          _id
        })
        console.log("accessToken", accessToken);
        return res.success({
          accessToken,
          refreshToken,
          user: {
            status: user.status,
            email: user.email,
            name: user.name
          },

        });
      } else {
        return res.error("password in correct", 'Password is not correct', 401);
      }
    } else {
      return res.error("Account in valid", 'Email or password is not correct', 401);

    }
  } catch (e) {
    return res.error(e);

  }

}
export default {
  login
}