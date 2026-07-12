import express from "express";

const app = express();
const port = 4000;

app.use(express.json());

// Array of student names
let students = ["Ankit", "Rahul", "Priya"];

// ==================== GET ====================

app.get("/getUser", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: students
    });
});

// ==================== POST ====================

app.post("/createUser", (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    students.push(name);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: students
    });

});

// ==================== PUT ====================

app.put("/updateUser", (req, res) => {

    const { name, newName } = req.body;

    const index = students.indexOf(name);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    students[index] = newName;

    res.json({
        success: true,
        message: "User updated successfully",
        data: students
    });

});

// ==================== DELETE ====================

app.delete("/deleteUser", (req, res) => {

    const { name } = req.body;

    const index = students.indexOf(name);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    students.splice(index, 1);

    res.json({
        success: true,
        message: "User deleted successfully",
        data: students
    });

});

// ==================== SERVER ====================

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});