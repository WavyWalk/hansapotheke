import {BaseModel, Property} from "../lib/frontmodel/src";

export const ALLOWED_CURRENCIES: string[] = ['EUR', 'USD']

export type IPriceType = 'LIST_PRICE' | 'RETAIL_PRICE'

export class Price extends BaseModel {

    @Property
    id?: number

    @Property
    priceType?: IPriceType

    @Property
    value?: number

    @Property
    productId?: number

    @Property
    currency?: number

}