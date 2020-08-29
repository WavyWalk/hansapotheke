import {Tag} from "../../../frontend/src/js/models/Tag";
import {TagTypes} from "./tagTypes";
import {App} from "../App";

class TagRepository {

    getAllWithTagType = async (tagType: TagTypes) => {
        return await App.prisma.tag.findMany({
            where: {
                tagType
            }
        })
    }

    create = async (data: Parameters<typeof App.prisma.tag.create>[0]['data']) => {
        return await App.prisma.tag.create({
            data
        })
    }

    findOrCreateTagsByValue = async (tags: string[] = [], tagType: TagTypes) => {
        let nonEmptyTags = tags.filter(it=>!!it)
        const existing = await App.prisma.tag.findMany({
            where: {
                tagType: tagType,
                value: {
                    in: nonEmptyTags
                }
            }
        })
        let existingTagValues = existing.map((it)=>it.value)
            .filter(it=>!!it)
        let notExisting = nonEmptyTags.filter((it)=>{
            return !existingTagValues.includes(it)
        })
        for (let toCreate of notExisting) {
            existing.push(await this.createTagWithTypeAndValue(toCreate, tagType))
        }
        return existing
    }

    createTagWithTypeAndValue = async (value: string, tagType: TagTypes) => {
        return await App.prisma.tag.create({
            data: {
                tagType,
                value
            }
        })
    }

}

export const tagRepository = new TagRepository()