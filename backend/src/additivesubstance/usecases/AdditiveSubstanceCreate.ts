import {ITag} from "../../tag/tagTypes";
import {tagRepository} from "../../tag/TagRepository";

class AdditiveSubstanceCreate {

    async run(payload: ITag) {
        payload.tagType = 'ADDITIVE_SUBSTANCE'
        let persisted = await tagRepository.create(payload)
        return persisted
    }

}

export const additiveSubstanceCreate = new AdditiveSubstanceCreate()