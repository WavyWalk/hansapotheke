import {Router} from "express";
import {handleAsync} from "../lib/handleAsync";
import {CategoryCache} from "./CategoryCache";
import {categoryRepository} from "./categoryRepository";

export const categoryRouter = Router({mergeParams: true})

categoryRouter.get('/primary', handleAsync(async (req, res)=>{
    const categories = await CategoryCache.getHierarchy()
    res.send(categories)
}))

categoryRouter.get('/secondary', handleAsync(async (req, res) => {
    const categories = await categoryRepository.findAllWithType('SECONDARY')
    res.send(categories)
}))