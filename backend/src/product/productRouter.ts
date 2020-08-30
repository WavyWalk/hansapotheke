import {Router} from "express";
import {handleAsync} from "../lib/handleAsync";
import {productCreate} from "./usecases/productCreate";
import {productRepository} from "./productRepository";
import {Session} from "../Session/session";


export const productRouter = Router({mergeParams: true})

productRouter.post('/', handleAsync(async (req, res)=>{
    if (!await Session.userIsAdmin(req)) {
        res.sendStatus(403)
        return
    }
    const data = req.body
    const created = await productCreate.run(data)
    res.send(created.serialize())
}))

productRouter.get('/uid/:uid/exists', handleAsync(async (req, res) => {
    let uid = req.params?.uid
    const exists = await productRepository.isUidExists(uid)
    return res.send({exists})
}))

productRouter.get('/:id', handleAsync(async (req, res) => {
    const id = parseInt(req.params.id)
    let product = await productRepository.findOneForShow(id)
    if (!product) {
        res.status(404)
        res.end()
        return
    }
    res.send(product.serialize())
}))