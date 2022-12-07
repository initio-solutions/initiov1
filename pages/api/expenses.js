import dbConnect from "../../lib/dbConnect";
import Expenses from "../../models/Expenses";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
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
        const expenses = await Expenses.create(req.body);
        res.status(201).json({ success: true, data: expenses });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const name = req.body.name;
        const amount = req.body.amount;
        const body = { name, amount };
        const expenses = await Expenses.findByIdAndUpdate(req.body.id, body);
        res.status(201).json({ success: true, data: expenses });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const expenses = await Expenses.findOneAndDelete({ _id: req.body.id });
        res.status(200).json({ success: true, data: {} });
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
