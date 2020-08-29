import {validateNotEmpty} from "./valuevalidations";
import {Tag} from "../Tag";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";

export class TagValidator {

    static validateValue = (tag: Tag) => {
        validateNotEmpty(tag, asKeyOf<Tag>('value'))
    }

}