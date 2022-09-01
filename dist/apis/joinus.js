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
const express_1 = __importDefault(require("express"));
const sendEmail_1 = __importDefault(require("../util/sendEmail"));
const router = express_1.default.Router();
router.post("/join-us", (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.body.email);
    try {
        const sendVerify = yield (0, sendEmail_1.default)(_req.body.email, "New User Verify", "link");
        if (sendVerify) {
            _res.status(200).json({
                success: true,
            });
        }
        else {
            throw new Error("Server Error");
        }
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = router;
//# sourceMappingURL=joinus.js.map