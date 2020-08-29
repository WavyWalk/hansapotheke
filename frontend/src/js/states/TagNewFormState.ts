import {FormState} from "../libs/formhandling/FormState";
import {Tag} from "../models/Tag";
import {TagValidator} from "../models/validations/TagValidator";

export class TagNewFormState extends FormState {

    model!: Tag

    validate = () => {
        TagValidator.validateValue(this.model)
    }

}