import {ITag} from "../../tag/tagTypes";
import {tagRepository} from "../../tag/TagRepository";

class AttributeCreate {

    async run(payload: ITag) {
        payload.tagType = 'ATTRIBUTE'
        let persisted = await tagRepository.create(payload)
        return persisted
    }

}

export const attributeCreate = new AttributeCreate()