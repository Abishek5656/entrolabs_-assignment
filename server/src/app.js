import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods:['POST'],
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.get("/api/v1/medicine/", (req, res) => {
    return res.status(200).json("Hi from web server")
})

//routes import
import medicineRouter from "./routes/medicine.route.js";

// routes declaration

app.use("/api/v1/medicine",  medicineRouter);

export { app }