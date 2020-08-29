import {Router} from "express";
import {handleAsync} from "../lib/handleAsync";
import {tagRepository} from "../tag/TagRepository";
import {attributeCreate} from "./usecases/AttributeCreate";

export const attributeRouter = Router({mergeParams: true})

attributeRouter.get('/', handleAsync(async (req, res) => {
    const manufacturers = await tagRepository.getAllWithTagType('ATTRIBUTE')
    res.send(manufacturers)
}))

attributeRouter.post('/', handleAsync(async (req, res) => {
    const payload = req.body
    const created = await attributeCreate.run(payload)
    res.send(created)
}))
