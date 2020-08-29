import {ApiEndpoint, BaseModel, ModelCollection, Property, RequestOptions} from "../libs/frontmodel/src";

export class Tag extends BaseModel {

    @Property
    id?: number

    @Property
    type?: string

    @Property
    value?: string

    static indexManufacturers = async () => {
        return await Tag.index({wilds: {tagType: 'manufacturer'}})
    }

    static indexActiveSubstances = async () => {
        return await Tag.index({wilds: {tagType: 'activeSubstance'}})
    }

    static indexAdditiveSubstances = async () => {
        return await Tag.index({wilds: {tagType: 'additiveSubstance'}})
    }

    static indexAttributes = async () => {
        return await Tag.index({wilds: {tagType: 'attribute'}})
    }

    @ApiEndpoint('GET', {url: '/api/:tagType'})
    static index: (options: RequestOptions & {wilds: {tagType: string}}) => Promise<ModelCollection<Tag>>

    createManufacturer = async () => {
        return await this.create({wilds: {tagType: 'manufacturer'}})
    }

    createActiveSubstance = async () => {
        return await this.create({wilds: {tagType: 'activeSubstance'}})
    }

    createAdditiveSubstance = async () => {
        return await this.create({wilds: {tagType: 'additiveSubstance'}})
    }

    createAttribute = async () => {
        return await this.create({wilds: {tagType: 'attribute'}})
    }

    @ApiEndpoint('POST', {url: `/api/:tagType`})
    create!: (options: RequestOptions & {wilds: {tagType: string}}) => Promise<Tag>


}