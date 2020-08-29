import { App } from "../App"
import * as fs from 'fs'
import {PROJECT_DIR} from "../index"
import {ICategoryCreate} from "./categoryTypes";
import {ICategory} from "../../originalData/scrapedDataMigration";


type CategoryTypes = 'PRIMARY' | 'SECONDARY'

export class CategoryRepository {

    findAllWithType = async (fieldType: CategoryTypes) => {
        return await App.prisma.category.findMany({
            where: {
                categoryType: fieldType
            }
        })
    }

    loadForProduct = async (eventId: number, categoryType: CategoryTypes) => {
        return await App.prisma.category.findMany({
            where: {
                categoryType: categoryType,
            }
        })
    }

    create = async (category: ICategory) => {
        const data: ICategoryCreate['data'] = {
            name: category.name,
            categoryType: category.categoryType,
        }
        return await App.prisma.category.create({
            data
        })
    }

    createFromScrapedData = async (category: ICategory, parentId?: number) => {
        let id: number
        let existing = await App.prisma.category.findMany({
            where: {
                name: category.name,
                categoryType: category.categoryType
            }
        })
        id = existing?.[0]?.id
        if (existing.length === 0) {
            let createData: ICategoryCreate = {
                data: {
                    name: category.name,
                    categoryType: category.categoryType,
                }
            }
            if (parentId) {
                createData.data.parent = {connect: {id: parentId}}
            }
            id = (await App.prisma.category.create(createData))?.id
        }
        for (let child of category.children!) {
            await this.createFromScrapedData(child, id)
        }
    }

    find = async (query: Parameters<typeof App.prisma.category.findMany>[0]) => {
        return await App.prisma.category.findMany(query)
    }

}

export const categoryRepository = new CategoryRepository()
