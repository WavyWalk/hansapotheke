import {FormState} from "../libs/formhandling/FormState";
import {Media} from "../models/Media";
import {MediaValidator} from "../models/validations/MediaValidator";

export class MediaNewFormState extends FormState {

    model!: Media

    validate = () => {
        this.validatePath()
    }

    validatePath = () => {
        MediaValidator.validatePath(this.model)
        this.update()
    }

    shouldShowPreview() {
        return this.model.path && this.model.isValid()
    }
}