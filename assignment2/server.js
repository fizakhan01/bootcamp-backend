import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(express.json());

app.use("/", studentRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});