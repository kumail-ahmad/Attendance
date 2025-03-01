import dbConnect from "@/lib/dbConnect";
import Student from "@/models/Student";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "POST") {
        try {
            const student = await Student.create(req.body);
            res.status(201).json({ success: true, data: student });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}
