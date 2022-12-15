import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    company: {
      type: String,
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, "Email address is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    description: {
      type: String,
      required: [true, "Please provide your description."],
    },
    quote: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
