import {BaseModel, HasMany, HasOne, ModelCollection, Property} from "../lib/frontmodel/src"

export class Category extends BaseModel {

    @Property
    id?: number

    @Property
    name?: string

    @Property
    parentId?: number

    @Property
    categoryType?: string

    @HasOne('Category')
    parent?: Category

    @HasMany('Children')
    children!: ModelCollection<Category>

}
