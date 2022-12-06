import dbConnect from "../../lib/dbConnect";
import Contact from "../../models/Contact";
import nodemailer from "nodemailer";
export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: "support@initiosolutions.com",
      pass: process.env.PASS,
    },
  });
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const contacts = await Contact.find({});
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const contact = await Contact.create(req.body);
        let info = await transporter.sendMail({
          from: "support@initiosolutions.com",
          to: "intiosol@gmail.com",
          subject: "You got a new lead!!",
          text: "Hi",
        });
        console.log("Message sent: %s", info);
        res.status(201).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
