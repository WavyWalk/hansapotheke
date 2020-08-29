import {SubscriptionState} from "../libs/statemanagement/SubscriptionState";
import {FormState} from "../libs/formhandling/FormState";
import {Product} from "../models/Product";
import {ProductValidator} from "../models/validations/ProductValidator";
import {Media} from "../models/Media";
import {Category, CategoryForSelect} from "../models/Category";
import {BaseModel, ModelCollection} from "../libs/frontmodel/src";
import {Tag} from "../models/Tag";
import {ITagForSelect, TagTypes} from "../models/tag/tagTypes";
import {Price} from "../models/Price";
import {PriceValidator} from "../models/validations/PriceValidator";

export class ProductNewFormState extends FormState {

    model!: Product

    imageIsInCrudMode = false

    currentlyEditedImage?: Media;

    primaryCategoriesForSelect?: CategoryForSelect[]

    secondaryCategoriesForSelect?: CategoryForSelect[]

    manufacturersForSelect?: ITagForSelect[]

    activeSubstancesForSelect?: ITagForSelect[]

    additiveSubstancesForSelect?: ITagForSelect[]

    attributesForSelect?: ITagForSelect[]

    manufacturerNewModeIsActive = false

    activeSubstanceNewModeIsActive = false

    additiveSubstanceNewModeIsActive = false

    attributesNewModeIsActive = false

    submitInProgress = false

    init() {
        this.model.prices.array = [
            new Price({priceType: 'RETAIL_PRICE'}),
            new Price({priceType: 'LIST_PRICE'})
        ]
        this.loadPrimaryCategories()
        this.loadSecondaryCategories()
        this.loadManufacturersForSelect(true)
        this.loadActiveSubstancesForSelect(true)
        this.loadAdditiveSubstancesForSelect(true)
        this.loadAttributesForSelect(true)
    }

    validate = () => {
        this.validateAttributes()
        this.validateAdditiveSubstances()
        this.validateActiveSubstances()
        this.validateManufacturer()
        this.validateSecondaryCategories()
        this.validatePrimaryCategories()
        this.model.prices.array.forEach((it)=>{this.validatePrice(it)})
        this.validateImagesPresence()
        this.validatePharmaForm()
        this.validatePackSize()
        this.validateDescriptionShort()
        this.validateUid()
        this.validateProductName()
        this.validatePzn()
    }

    async loadActiveSubstancesForSelect(update = false) {
        this.activeSubstancesForSelect = undefined
        this.update()
        this.loadTagsForSelect(Tag.indexActiveSubstances, (tags)=>{
            this.activeSubstancesForSelect = tags
        }, update)
    }

    async loadAdditiveSubstancesForSelect(update = false) {
        this.additiveSubstancesForSelect = undefined
        this.update()
        this.loadTagsForSelect(Tag.indexAdditiveSubstances, (tags)=>{
            this.additiveSubstancesForSelect = tags
        }, update)
    }

    async loadManufacturersForSelect(update = false) {
        this.manufacturersForSelect = undefined
        this.update()
        this.loadTagsForSelect(Tag.indexManufacturers, (tags)=>{
            this.manufacturersForSelect = tags
        }, update)
    }

    async loadAttributesForSelect(update = false) {
        this.attributesForSelect = undefined
        this.update()
        this.loadTagsForSelect(Tag.indexAttributes, (tags)=>{
            this.attributesForSelect = tags
        }, update)
    }

    setManufacturerNewModeIsActive = (isActive: boolean) => {
        this.manufacturerNewModeIsActive = isActive
        this.update()
    }

    setActiveSubstanceNewModeIsActive = (isActive: boolean) => {
        this.activeSubstanceNewModeIsActive = isActive
        this.update()
    }

    setAdditiveSubstanceNewModeIsActive = (isActive: boolean) => {
        this.additiveSubstanceNewModeIsActive = isActive
        this.update()
    }

    setAttributesNewModeIsActive = (isActive: boolean) => {
        this.attributesNewModeIsActive = isActive
        this.update()
    }

    validateProductName = () => {
        ProductValidator.validateName(this.model)
        this.update()
    }

    validateUid = () => {
        ProductValidator.validateUid(this.model)
    }

    validateDescriptionShort = () => {
        ProductValidator.validateDescriptionShort(this.model)
    }

    validatePzn = () => {
        ProductValidator.validatePzn(this.model)
    }

    validatePackSize = () => {
        ProductValidator.validatePackSize(this.model)
    }

    validatePharmaForm = () => {
        ProductValidator.validatePharmaForm(this.model)
    }

    validateImagesPresence = () => {
        ProductValidator.validateImagesPresence(this.model)
    }

    validatePrice = (price: Price) => {
        PriceValidator.validateCurrency(price)
        PriceValidator.validateValue(price)
    }

    validatePrimaryCategories = () => {
        ProductValidator.validatePrimaryCategoriesPresence(this.model)
    }

    validateSecondaryCategories = () => {
        ProductValidator.validateSecondaryCategoriesPresence(this.model)
    }

    validateManufacturer = () => {
        ProductValidator.validateManufacturersPresence(this.model)
    }

    validateActiveSubstances = () => {
        ProductValidator.validateActiveSubstances(this.model)
    }

    validateAdditiveSubstances = () => {
        ProductValidator.validateAdditiveSubstances(this.model)
    }

    validateAttributes = () => {
        ProductValidator.validateAttributes(this.model)
    }

    protected setImageIsInCrudMode = (isActive: boolean) => {
        this.imageIsInCrudMode = isActive
    }

    protected setCurrentlyEditedImage = (image?: Media) => {
        this.currentlyEditedImage = image
    }

    onMediaDelete = (media: Media) => {
        this.model.images.array = this.model.images.array.filter((it)=>{
            return it !== media
        })
        this.validateImagesPresence()
        this.update()
    }

    onMediaSubmit(media: Media) {
        if (this.currentlyEditedImage) {
            this.setImageIsInCrudMode(false)
            this.setCurrentlyEditedImage(undefined)
            this.update()
            return
        }
        this.model.images.array.push(media)
        this.setImageIsInCrudMode(false)
        this.setCurrentlyEditedImage(undefined)
        this.validateImagesPresence()
        this.update()
    }

    initializeNewImage = () => {
        this.setCurrentlyEditedImage()
        this.setImageIsInCrudMode(true)
        this.update()
    }

    onMediaEdit(media: Media) {
        this.setCurrentlyEditedImage(media)
        this.setImageIsInCrudMode(true)
        this.update()
    }

    onImageModalClose() {
        this.setCurrentlyEditedImage(undefined)
        this.setImageIsInCrudMode(false)
        this.validateImagesPresence()
        this.update()
    }

    async loadPrimaryCategories() {
        if (this.primaryCategoriesForSelect) {
            return
        }
        const categories = await Category.primaryCategoriesIndex()
        this.primaryCategoriesForSelect = categories.array.map(it=>it.serialize()) as any
        this.update()
    }

    async loadSecondaryCategories() {
        if (this.secondaryCategoriesForSelect) {
            return
        }
        const categories = await Category.secondaryCategoriesIndex()
        this.secondaryCategoriesForSelect = categories.array.map(it=>it.serialize()) as any
        this.update()
    }

    getPrimaryCategoriesForSelect = () => {
        const categories = this.primaryCategoriesForSelect ?? []
        categories.forEach((it)=>{
            this.addLabelsToCategories(it, this.model.primaryCategories.array)
        })
        return categories
    }

    getSecondaryCategoriesForSelect = () => {
        const categories = this.secondaryCategoriesForSelect ?? []
        categories.forEach((it)=>{
            this.addLabelsToCategories(it, this.model.secondaryCategories.array)
        })
        return categories
    }

    private addLabelsToCategories = (category: any, selected: Category[]) => {
        category.label = category.name
        category.value = category.id
        category.isDefaultValue = selected.find(it=>it.id === category.id)
        if (category.children) {
            category.children.forEach((it:any)=>{
                this.addLabelsToCategories(it, selected)
            })
        }
    }

    protected handleCategoryChange = (value: any, categories: ModelCollection<Category>) => {
        const assigned = categories.array.find(it=>it.id === value.id)
        if (assigned) {
            categories.array = categories.array.filter(it=>it.id !== value.value)
        } else {
            categories.array.push(new Category({
                id: value.id,
                name: value.name
            }))
        }
        this.update()
    }

    handlePrimaryCategoryChange = (value: any, categories: ModelCollection<Category>) => {
        this.handleCategoryChange(value, categories)
        this.update()
    }

    handleSecondaryChange = (value: any, categories: ModelCollection<Category>) => {
        this.handleCategoryChange(value, categories)
        this.update()
    }

    async loadTagsForSelect(
        loadFunc: ()=>Promise<ModelCollection<Tag>>,
        setter: (selectTags: ITagForSelect[])=>any,
        update: boolean = false
    ) {
        let tags = await loadFunc()
        let forSelect: ITagForSelect[] = tags.array.map((it)=>{
            return {
                label: it.value,
                value: it.id
            }
        })
        setter(forSelect)
        update && this.update()
    }

    getManufacturerTagsForSelect = () => {
        return this.getTagsForSelect(this.manufacturersForSelect!, this.model.manufacturer)
    }

    getActiveSubstancesForSelect = () => {
        return this.getTagsForSelect(this.activeSubstancesForSelect!, this.model.activeSubstances)
    }

    getAdditiveSubstancesForSelect = () => {
        return this.getTagsForSelect(this.additiveSubstancesForSelect!, this.model.additiveSubstances)
    }

    getAttributesForSelect = () => {
        return this.getTagsForSelect(this.attributesForSelect!, this.model.attributes)
    }

    getTagsForSelect = (tags: ITagForSelect[], selected: ModelCollection<Tag>) => {
        return tags.map((selectTag)=>{
            selectTag.isDefaultValue = !!selected.array.find(it => it.id === selectTag.value)
            return selectTag
        })
    }

    handleManufacturerChange(value: any) {
        this.handleTagChange(value, this.model.manufacturer, 'MANUFACTURER')
    }

    handleActiveSubstancesChange(value: any) {
        this.handleTagChange(value, this.model.activeSubstances, 'ACTIVE_SUBSTANCE')
    }

    handleAdditiveSubstanceChange(value: any) {
        this.handleTagChange(value, this.model.additiveSubstances, 'ADDITIVE_SUBSTANCE')
    }

    handleAttributeChange(value: any) {
        this.handleTagChange(value, this.model.attributes, 'ATTRIBUTE')
    }
    
    handleTagChange = (selected: ITagForSelect, manufacturers: ModelCollection<Tag>, type: TagTypes) => {
        const assigned = manufacturers.array.find(it=>it.id === selected.value)
        if (assigned) {
            manufacturers.array = manufacturers.array.filter(it=>it.id !== selected.value)
        } else {
            manufacturers.array.push(new Tag({
                id: selected.value,
                value: selected.label,
                tagType: type
            }))
        }
        this.update()
    }

    priceCanBeCopiedFromRetailToListPrice = () => {
        const retailPrice = this.model.getRetailPrice()!
        const listPrice = this.model.getListPrice()!
        return retailPrice.value
            && retailPrice.isValid()
            && retailPrice.value !== listPrice.value
    }

    copyPriceFromRetailToListPrice = () => {
        const retailPrice = this.model.getRetailPrice()!
        const listPrice = this.model.getListPrice()!
        listPrice.value = retailPrice.value
        listPrice.currency = retailPrice.currency
        this.validatePrice(listPrice)
        this.validatePrice(retailPrice)
        this.update()
    }

    submit = async () => {
        this.validate()
        if (!this.model.isValid()) {
            console.log(this.model.serialize())
            this.update()
            return
        }
        const toggleProgress = (value: boolean) => {
            this.submitInProgress = value
            this.update()
        }
        const uidExists = await this.model.isUidExists({wilds: {uid: this.model.uid!}, isLoadingToggle: toggleProgress})
        if (uidExists) {
            this.model.addErrorFor('uid', 'already exists')
            this.update()
            return
        }
        let result = await this.model.create({isLoadingToggle: toggleProgress})
    }
}