import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (_req:any, _res:any) => {
    _res.send("Hello World");
});

app.listen(process.env.BACK_PORT, () => {
    console.log(`Server running on ${process.env.BACK_PORT}`)
})
