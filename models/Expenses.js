import mongoose from "mongoose";
const ExpensesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Expenses ||
  mongoose.model("Expenses", ExpensesSchema);
