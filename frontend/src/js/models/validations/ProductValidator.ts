import {Product} from "../Product";
import {validateLength, validateModelCollectionNotEmpty, validateNotEmpty, validateNumeric} from "./valuevalidations";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";

export class ProductValidator {

    static validateName = (model: Product) => {
        validateNotEmpty(model, asKeyOf<Product>('productName'))
    }

    static validateUid = (model: Product) => {
        validateNotEmpty(model, asKeyOf<Product>('uid'))
    }

    static validateDescriptionShort = (model: Product) => {
        validateNotEmpty(model, asKeyOf<Product>('descriptionShort'))
    }

    static validatePzn = (model: Product) => {
        validateNumeric(model, asKeyOf<Product>('pzn'))
    }

    static validatePharmaForm = (model: Product) => {
        validateNotEmpty(model, asKeyOf<Product>('pharmaForm'))
    }

    static validatePackSize(model: Product) {
        validateNotEmpty(model, asKeyOf<Product>('packSize'))
    }

    static validateImagesPresence(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('images'))
    }

    static validatePrimaryCategoriesPresence(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('primaryCategories'))
    }

    static validateSecondaryCategoriesPresence(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('secondaryCategories'))
    }

    static validateManufacturersPresence(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('manufacturer'))
    }

    static validateActiveSubstances(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('activeSubstances'))
    }

    static validateAdditiveSubstances(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('additiveSubstances'))
    }

    static validateAttributes(model: Product) {
        validateModelCollectionNotEmpty(model, asKeyOf<Product>('attributes'))
    }

}