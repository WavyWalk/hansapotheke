import {BaseModel, ModelCollection, Property} from "../lib/frontmodel/src";
import {TagTypes} from "./tagTypes";

export class Tag extends BaseModel {

    @Property
    id?: number

    @Property
    tagType?: TagTypes

    @Property
    value?: string

}