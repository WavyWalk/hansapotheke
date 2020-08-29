import {ModelRegistry} from "../lib/frontmodel/src"
import {User} from "../user/User"
import {Account} from "../account/Account"
import {Role} from "../role/Role"
import {Category} from "../category/Category";
import {Product} from "../product/Product";
import {Media} from "../media/Media";
import {Tag} from "../tag/Tag";
import {Price} from "../price/Price";



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

