import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import projectRoutes from "./routes/project.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", taskRoutes);
app.use("/api", projectRoutes);

export default app;
