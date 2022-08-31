"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.get("/", (_req, _res) => {
    _res.send("Hello World !!!!");
});
app.listen(process.env.BACK_PORT, () => {
    console.log(`Server running on ${process.env.BACK_PORT}`);
});
//# sourceMappingURL=app.js.map