import {BaseModel, Property} from "../lib/frontmodel/src";

export class Media extends BaseModel {

    @Property
    id?: number

    @Property
    mediaType?: string

    @Property
    driver?: string

    @Property
    path?: string

}