import {Price} from "../Price";
import {validateNotEmpty, validateNumeric} from "./valuevalidations";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";

export class PriceValidator {

    static validateValue = (model: Price) => {
        validateNumeric(model, asKeyOf<Price>('value'))
    }

    static validateCurrency = (model: Price) => {
        validateNotEmpty(model, asKeyOf<Price>('currency'))
    }

}