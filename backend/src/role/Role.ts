import {BaseModel, Property} from "../lib/frontmodel/src"

type RoleTypes = 'customer' | 'admin'

export class Role extends BaseModel {

    @Property
    id?: number

    @Property
    name?: string

}