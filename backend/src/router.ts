import { PROJECT_DIR } from './index';
import express from "express"
import {WebpackStatsInfo} from "./assetsmanagement/WebpackStatsInfo";
import {userRouter} from "./user/userRouter"
import {sessionRouter} from "./Session/sessionRouter"
import {handleAsync} from "./lib/handleAsync"
import {categoryRouter} from "./category/categoryRouter";
import {manufacturerRouter} from "./manufacturer/maufacturerRouter";
import {activeSubstanceRouter} from "./activesubstance/activeSubstanceRouter";
import {additiveSubstanceRouter} from "./additivesubstance/additiveSubstanceRouter";
import {attributeRouter} from "./attribute/attributeRouter";
import {productRouter} from "./product/productRouter";

export class Router {
    
    static setRoutes(app: express.Application) {
        app.use('/public', express.static(`${PROJECT_DIR}/public`))
        app.use('/test', handleAsync(async (req, res)=>{

        }))
        const apiRouter = express.Router({mergeParams: true})
        app.use('/api', apiRouter)
        apiRouter.use('/user', userRouter)
        apiRouter.use('/session', sessionRouter)
        apiRouter.use('/category', categoryRouter)
        apiRouter.use('/manufacturer', manufacturerRouter)
        apiRouter.use('/activeSubstance', activeSubstanceRouter)
        apiRouter.use('/additiveSubstance', additiveSubstanceRouter)
        apiRouter.use('/attribute', attributeRouter)
        apiRouter.use('/product', productRouter)
        apiRouter.use('/*', (req, res)=>{
            res.sendStatus(404)
        })

        app.get("*", (req, res) => {
            res.render(`${PROJECT_DIR}/public/index`, {
                pathToCssIndex: WebpackStatsInfo.pathToCssIndex,
                pathToJsIndex: WebpackStatsInfo.pathToJsIndex,
            })
        })


    }

}