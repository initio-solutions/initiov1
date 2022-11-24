import dbConnect from "../../lib/dbConnect";
import Expenses from "../../models/Expenses";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const expenses = await Expenses.find({});
        res.status(200).json({ success: true, data: expenses });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const expenses = await Expenses.create(req.body);
        res.status(201).json({ success: true, data: expenses });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      console.log(req.body);
      res.status(400).json({ success: false });
      break;
  }
}
