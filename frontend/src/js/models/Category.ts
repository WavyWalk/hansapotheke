import {BaseModel, HasMany, HasOne, ModelCollection, Property, RequestOptions, ApiEndpoint} from "../libs/frontmodel/src"

export type CategoryTypes = 'FIELD' | 'CATEGORY' | 'TARGET_AUDIENCE'

export type CategoryForSelect = {id: number, name: string}

export class Category extends BaseModel {

    @Property
    id?: number

    @Property
    name?: string

    @Property
    parentId?: number

    @HasOne('Category')
    parent?: Category

    @HasMany('Category')
    children!: ModelCollection<Category>

    @Property
    label?: string

    @HasOne('Category')
    value?: Category

    @Property
    checked?: boolean

    @ApiEndpoint('GET', {url: `/api/category/primary`})
    static primaryCategoriesIndex: (options?: RequestOptions) => Promise<ModelCollection<Category>>

    static async afterPrimaryCategoriesIndexRequest(options:RequestOptions) {
        return await this.afterIndexRequest(options)
    }

    @ApiEndpoint('GET', {url: `/api/category/secondary`})
    static secondaryCategoriesIndex: (options?: RequestOptions) => Promise<ModelCollection<Category>>

    static async afterSecondaryCategoriesIndexRequest(options:RequestOptions) {
        return await this.afterIndexRequest(options)
    }

}
