import {BaseModel, Property} from "../libs/frontmodel/src";
import defineProperty = Reflect.defineProperty;

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