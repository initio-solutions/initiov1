import dbConnect from "../../lib/dbConnect";
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
