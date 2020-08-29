import {Media} from "../Media";
import {validateImageHref} from "./valuevalidations";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";

export class MediaValidator {

    static validatePath = (media: Media) => {
        validateImageHref(media, 'path')
    }

}