import {Router} from "express";
import {handleAsync} from "../lib/handleAsync";
import {tagRepository} from "../tag/TagRepository";
import {activeSubstanceCreate} from "./usecases/ActiveSubstanceCreate";

export const activeSubstanceRouter = Router({mergeParams: true})

activeSubstanceRouter.get('/', handleAsync(async (req, res) => {
    const manufacturers = await tagRepository.getAllWithTagType('ACTIVE_SUBSTANCE')
    res.send(manufacturers)
}))

activeSubstanceRouter.post('/', handleAsync(async (req, res) => {
    const payload = req.body
    const created = await activeSubstanceCreate.run(payload)
    res.send(created)
}))
