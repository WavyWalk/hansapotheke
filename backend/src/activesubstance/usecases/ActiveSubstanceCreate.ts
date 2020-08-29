import {ITag} from "../../tag/tagTypes";
import {tagRepository} from "../../tag/TagRepository";

class ActiveSubstanceCreate {

    async run(payload: ITag) {
        payload.tagType = 'ACTIVE_SUBSTANCE'
        let persisted = await tagRepository.create(payload)
        return persisted
    }

}

export const activeSubstanceCreate = new ActiveSubstanceCreate()