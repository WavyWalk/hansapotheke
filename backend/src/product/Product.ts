import {Tag} from "../tag/Tag";
import {Media} from "../media/Media";
import {Price} from "../price/Price";
import {BaseModel, ModelCollection, Property, HasMany} from "../lib/frontmodel/src";
import {Category} from "../category/Category";
import {IModelProperties} from "../lib/frontmodel/src/interfaces/IModelProperties";

export class Product extends BaseModel {

    constructor(properties: IModelProperties, normalize = true) {
        super(properties)
        if (normalize) {
            this.normalizeTags()
            this.normalizeCategories()
        }
    }

    normalizeTags = () => {
        this.tags.array.forEach((it)=>{
            switch (it.tagType) {
                case 'ATTRIBUTE':
                    this.attributes.array.push(it)
                    break
                case "ACTIVE_SUBSTANCE":
                    this.activeSubstances.array.push(it)
                    break
                case "ADDITIVE_SUBSTANCE":
                    this.activeSubstances.array.push(it)
                    break
                case "BRAND":
                    this.brand.array.push(it)
                    break
                case "MANUFACTURER":
                    this.manufacturer.array.push(it)
                    break
            }
        })
        this.tags.array = []
    }

    normalizeCategories = () => {
        this.categories.array.forEach((it)=>{
            switch (it.categoryType) {
                case 'PRIMARY':
                    this.primaryCategories.array.push(it)
                    break
                case 'SECONDARY':
                    this.secondaryCategories.array.push(it)
                    break
            }
        })
    }

    @Property
    id?: number

    @HasMany('Tag')
    activeSubstances!: ModelCollection<Tag>

    @HasMany('Tag')
    additiveSubstances!: ModelCollection<Tag>

    @HasMany('Category')
    categories!: ModelCollection<Category>

    @Property
    baseProductUidGroup?: string

    @HasMany('Tag')
    attributes!: ModelCollection<Tag>

    @Property
    averageRating?: number

    @HasMany('Tag')
    brand!: ModelCollection<Tag>

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

    @HasMany('Tag')
    tags!: ModelCollection<Tag>

    @HasMany('Price')
    prices!: ModelCollection<Price>

    @HasMany('Category')
    primaryCategories!: ModelCollection<Category>

    @HasMany('Category')
    secondaryCategories!: ModelCollection<Category>

    getListPrice = () => {
        return this.prices.array.find(it=>it.priceType === 'LIST_PRICE')
    }

    getRetailPrice = () => {
        return this.prices.array.find(it=>it.priceType === 'RETAIL_PRICE')
    }

}