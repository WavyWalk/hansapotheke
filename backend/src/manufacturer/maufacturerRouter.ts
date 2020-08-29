import {Router} from "express";
import {handleAsync} from "../lib/handleAsync";
import {tagRepository} from "../tag/TagRepository";
import {manufacturerCreate} from "./usecases/ManufacturerCreate";

export const manufacturerRouter = Router({mergeParams: true})

manufacturerRouter.get('/', handleAsync(async (req, res) => {
    const manufacturers = await tagRepository.getAllWithTagType('MANUFACTURER')
    res.send(manufacturers)
}))

manufacturerRouter.post('/', handleAsync(async (req, res) => {
    const payload = req.body
    const created = await manufacturerCreate.run(payload)
    res.send(created)
}))
