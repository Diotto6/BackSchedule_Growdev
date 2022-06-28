import express from 'express';
import cors from 'cors';

import UserRoutes from './routers/user';
import { Database } from './database/connections/Database';

export default class Application {
    readonly _express: express.Application;


    constructor() {
        this._express = express();
    }

    async init() {        
        this.config();
        this.routers();
        await this.database();
    }

    start(port: number) {
        this._express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`); 
        });
    }

    private config() {
        this._express.use(express.json());
        this._express.use(express.urlencoded({ extended: false }));
        this._express.use(cors());
    }

    private routers() {
        const UserRouter = new UserRoutes().init();
        this._express.use(UserRouter);
    }

    private async database() {
        await Database.getInstance();
    }
};