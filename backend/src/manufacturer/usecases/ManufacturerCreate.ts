import {ITag} from "../../tag/tagTypes";
import {tagRepository} from "../../tag/TagRepository";

class ManufacturerCreate {

    async run(payload: ITag) {
        payload.tagType = 'MANUFACTURER'
        let persisted = await tagRepository.create(payload)
        return persisted
    }

}

export const manufacturerCreate = new ManufacturerCreate()