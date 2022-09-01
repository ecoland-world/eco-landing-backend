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
const email_1 = __importDefault(require("../config/email"));
const sendNodemailer = (msg, callback) => {
    const main = () => __awaiter(void 0, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            host: email_1.default.smtp.host,
            port: email_1.default.smtp.port,
            secure: false,
            auth: {
                user: email_1.default.account.user,
                pass: email_1.default.account.pass
            }
        });
        const mailOptions = {
            from: email_1.default.info.from,
            to: email_1.default.info.to,
            subject: email_1.default.info.subject,
            html: msg
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return callback("Sorry, your message couldn't be sent");
            }
            else {
                console.log("Message sent: " + info.response);
                return callback("Your message was sent successfully");
            }
        });
    });
    main();
};
exports.default = sendNodemailer;
//# sourceMappingURL=sendEmail.js.map