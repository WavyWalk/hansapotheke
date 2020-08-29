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

}

export const tagRepository = new TagRepository()