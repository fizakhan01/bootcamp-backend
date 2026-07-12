import students from "../models/studentModel.js";

// GET
export const getStudents = (req, res) => {
    res.status(200).json({
        success: true,
        data: students
    });
};

// POST
export const createStudent = (req, res) => {
    const { name, age, gender } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        gender
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: students
    });
};

// PUT
export const updateStudent = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, age, gender } = req.body;

    student.name = name;
    student.age = age;
    student.gender = gender;

    res.json({
        success: true,
        message: "Student updated successfully",
        data: students
    });
};

// DELETE
export const deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        success: true,
        message: "Student deleted successfully",
        data: students
    });
};