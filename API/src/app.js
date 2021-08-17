import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import userRoutes from "./components/users/users.routes";
import authRoutes from "./components/auth/auth.routes";
import swaggerDoc from "../swagger.json";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
