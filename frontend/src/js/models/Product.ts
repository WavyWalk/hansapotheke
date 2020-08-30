import {Tag} from "./Tag";
import {Media} from "./Media";
import {Price} from "./Price";
import {BaseModel, ModelCollection, Property, HasMany, ApiEndpoint, RequestOptions} from "../libs/frontmodel/src";
import {Category} from "./Category";

export class Product extends BaseModel {

    @Property
    id?: number

    @HasMany('Tag')
    activeSubstances!: ModelCollection<Tag>

    @HasMany('Tag')
    additiveSubstances!: ModelCollection<Tag>

    @Property
    baseProductUidGroup?: string

    @HasMany('Tag')
    attributes!: ModelCollection<Tag>

    @Property
    averageRating?: number

    @Property
    brand?: string

    @Property
    created?: string

    @Property
    descriptionShort?: string

    @HasMany('Tag')
    manufacturer!: ModelCollection<Tag>

    @Property
    productName?: string

    @HasMany('Media')
    images!: ModelCollection<Media>

    @Property
    pzn?: string

    @Property
    pharmaForm?: string

    @Property
    prescriptionMedicine?: boolean

    @Property
    packSize?: string

    @Property
    uid?: string

    @Property
    isBaseProduct?: boolean

    @Property
    baseProductUid?: string

    @Property
    tags?: Tag[]

    @HasMany('Price')
    prices!: ModelCollection<Price>

    @HasMany('Category')
    primaryCategories!: ModelCollection<Category>

    @HasMany('Category')
    secondaryCategories!: ModelCollection<Category>

    getListPrice = () => {
        return this.prices.array.find(it=>it.priceType === 'LIST')
    }

    getRetailPrice = () => {
        return this.prices.array.find(it=>it.priceType === 'RETAIL')
    }

    @ApiEndpoint('POST', {url: `/api/product`})
    create!: (options?: RequestOptions) => Promise<Product>

    @ApiEndpoint('GET', {url: `/api/product/uid/:uid/exists`})
    isUidExists!: (options: RequestOptions & {wilds: {uid: string}}) => boolean

    afterIsUidExistsRequest = async (options: RequestOptions) => {
        const result = await options.rootPromise
        return result.exists
    }

    @ApiEndpoint('GET', {url: `/api/product/:id`})
    static show: (options: RequestOptions & {wilds: {id: any}}) => Promise<Product>

    getFirstImagePath = () => {
        return this.images.array[0]?.path
    }

    getDiscountPercent = () => {
        let listPrice = this.getListPrice()?.value
        let retailPrice = this.getRetailPrice()?.value
        if (!listPrice || !retailPrice) {
            return null
        }
        let difference = listPrice - retailPrice
        if (difference > 0) {
            return (100 - (100 / listPrice * retailPrice)).toFixed(1)
        }
        return null
    }

}