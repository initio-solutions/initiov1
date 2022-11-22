import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import CryptoJS from "crypto-js";
var jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        const bytes = CryptoJS.AES.decrypt(
          user.password,
          process.env.CRYPTO_SECRET
        );
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        console.log(decryptedData);
        if (user) {
          console.log(user);
          if (
            req.body.email === user.email &&
            req.body.password === decryptedData
          ) {
            var token = jwt.sign(
              { email: user.email, name: user.name },
              process.env.JWT_SECRET,
              {
                expiresIn: "10s",
              }
            );
            console.log({ token });
            return res.status(200).json({ token, success: true });
          } else {
            return res
              .status(200)
              .json({ success: false, error: "Invalid Credentials" });
          }
        } else {
          return res
            .status(200)
            .json({ success: false, error: "No user found" });
        }
      } catch (e) {
        console.error(e);
        // res.status(400).json({ error: "This method is not allowed" });
      }
    default:
      // res.status(400).json({ success: false });
      break;
  }
}
