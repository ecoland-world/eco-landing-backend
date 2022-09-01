"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configNodemailer = {
    account: {
        user: "felix44291@gmail.com",
        pass: "YQr4asb0"
    },
    smtp: {
        host: "smtp-mail.outlook.com",
        port: 587
    },
    info: {
        from: '"Website form contact <your_email_user@example.com>"',
        to: "<you_email_user01@email.com>, <you_email_user02@email.com>",
        subject: "New contact from the website"
    }
};
exports.default = configNodemailer;
//# sourceMappingURL=email.js.map