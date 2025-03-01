import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
});

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
