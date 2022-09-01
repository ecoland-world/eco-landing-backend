import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import joinus from "./apis/joinus"

const app = express();
dotenv.config();

app.use(
    cors({
        origin: "*",
        methods: ["POST", "GET"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_req: Request, _res: Response) => {
	_res.json({ msg: "Hello World" })
});

app.use("/api", joinus);

app.listen(process.env.BACK_PORT, () => {
	console.log(`Server running on ${process.env.BACK_PORT}`)
})
