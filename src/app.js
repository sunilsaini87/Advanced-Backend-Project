import { Express } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = Express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}))

export { app }