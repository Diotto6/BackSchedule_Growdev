"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routers/user"));
const Database_1 = require("./database/connections/Database");
class Application {
    constructor() {
        this._express = (0, express_1.default)();
    }
    async init() {
        this.config();
        this.routers();
        await this.database();
    }
    start(port) {
        this._express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`);
        });
    }
    config() {
        this._express.use(express_1.default.json());
        this._express.use(express_1.default.urlencoded({ extended: false }));
        this._express.use((0, cors_1.default)());
    }
    routers() {
        const UserRouter = new user_1.default().init();
        this._express.use(UserRouter);
    }
    async database() {
        await Database_1.Database.getInstance();
    }
}
exports.default = Application;
;
