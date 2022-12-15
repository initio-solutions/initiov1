import dbConnect from "../../lib/dbConnect";
import Project from "../../models/Project";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const projects = await Project.find({});
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const project = await Project.create(req.body);
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const project = await Project.findByIdAndUpdate(req.body.id, body);
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const project = await Project.findOneAndDelete({ _id: req.body.id });
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
