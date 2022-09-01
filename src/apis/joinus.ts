import express, { Request, Response } from "express";
import sendEmail from "../util/sendEmail";

const router = express.Router()

router.post("/join-us",async (_req: Request, _res: Response) => {
    console.log(_req.body.email)
    try {
        const sendVerify = await sendEmail(_req.body.email, "New User Verify", "link");

        if (sendVerify) {
            _res.status(200).json({
                success: true,
            });
        } else {
            throw new Error("Server Error");
        }
    } catch (err:any) {
        console.log(err)
    }
})

export default router