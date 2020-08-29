import {Router} from "express";
import {handleAsync} from "../lib/handleAsync";
import {tagRepository} from "../tag/TagRepository";
import {additiveSubstanceCreate} from "./usecases/AdditiveSubstanceCreate";

export const additiveSubstanceRouter = Router({mergeParams: true})

additiveSubstanceRouter.get('/', handleAsync(async (req, res) => {
    const manufacturers = await tagRepository.getAllWithTagType('ADDITIVE_SUBSTANCE')
    res.send(manufacturers)
}))

additiveSubstanceRouter.post('/', handleAsync(async (req, res) => {
    const payload = req.body
    const created = await additiveSubstanceCreate.run(payload)
    res.send(created)
}))
