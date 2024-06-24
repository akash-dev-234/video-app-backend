import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
); //using this for our app to accept json data
app.use(
  express.urlencoded({
    extended: true,
  })
); //using this for our app to accept data from url
app.use(express.static("public")); // to store static assets that can accessible to anyone
app.use(cookieParser());

// import routes

import userRouter from "./routes/user.routes.js";

// routes declaration

app.use("/api/v1/users", userRouter);

export { app };
