import {ModelRegistry} from "../libs/frontmodel/src";
import {User} from "./User"
import {Account} from "./Account"
import {Role} from "./Role"
import {Category} from "./Category"
import {Media} from "./Media";
import {Tag} from "./Tag";
import {Product} from "./Product";
import {Price} from "./Price";


export class ModelRegistrator {
    static run() {
        ModelRegistry.registeredModels = {
            User,
            Account,
            Role,
            Category,
            Product,
            Media,
            Tag,
            Price,
        }
    }
}