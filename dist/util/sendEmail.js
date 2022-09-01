"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (email, subject, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: process.env.SERVICE,
            auth: {
                type: "OAuth2",
                user: process.env.USER,
                clientId: process.env.OAUTH_CLIENTID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                accessToken: process.env.OAUTH_ACCESS_TOKEN
            },
        });
        const mailOptions = {
            from: process.env.USER,
            to: email,
            subject,
            text: "Join us",
            html: `<p>🙋🏻‍♀️  &mdash; Please enter this url : <a href="http://localhost:5000/">${text}</a></p>`,
            textEncoding: 'base64',
            headers: [
                { key: 'X-Application-Developer', value: 'Amit Agarwal' },
                { key: 'X-Application-Version', value: 'v1.0.0.2' },
            ],
        };
        yield transporter.sendMail(mailOptions);
        transporter.close();
        return true;
    }
    catch (error) {
        throw new Error("Email Not Sent");
    }
});
exports.default = sendEmail;
//# sourceMappingURL=sendEmail.js.map