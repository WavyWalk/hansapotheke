import express, {Express, NextFunction, Request, Response} from 'express'
import { Router } from './router'
import {WebpackStatsInfo} from "./assetsmanagement/WebpackStatsInfo";
import "reflect-metadata"
import * as bodyParser from "body-parser"
import {PrismaClient} from "@prisma/client"
import {migratePresetData} from "./presetdata/migratePresetData"
import {ModelRegistrator} from "./modelregistry/ModelRegistrator"
import cookieParser from "cookie-parser"
import {ScrapeOriginalDataCommand} from "./commands/ScrapeOriginalDataCommand"
import {commandRunner} from "./commands/commandRunner";
import {globalErrorHandler} from "./errorhandling/globalErrorHandler";


const setMiddleware = (app: Express) => {
    app.use(express.json())
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(globalErrorHandler)
}

export class App {

    static prisma: PrismaClient

    static async init() {
        ModelRegistrator.run()
        App.prisma = new PrismaClient({
            log: ['query', 'info', 'warn']
        })
        await App.prisma.$connect()
        if (await this.runCommand()) {
            return
        }
        const app = express()
        WebpackStatsInfo.readAndAssignStats()
        app.set('view engine', 'pug')
        app.disable('x-powered-by')
        setMiddleware(app)
        Router.setRoutes(app)
        await migratePresetData()
        const port = 3000
        app.listen(port)
        console.log(`listening on ${port}`)
    }

    static async runCommand() {
        let args = process.argv.slice(2)
        return commandRunner.run(args)
    }


}