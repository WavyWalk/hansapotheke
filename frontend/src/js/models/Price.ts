import {BaseModel, Property} from "../libs/frontmodel/src";
import {ISelectPair} from "../components/formelements/ISelectPair";

export const ALLOWED_CURRENCIES: string[] = ['EUR', 'USD']

export const CURRENCIES_FOR_SELECT: ISelectPair[] = ALLOWED_CURRENCIES.map((it)=>{
    return {
        value: it,
        readableName: it
    }
})

export type IPriceType = 'LIST' | 'RETAIL'

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

    getFormattedValue = () => {
        let value = this.value
        if (!value) {
            return null
        }
        return `€ ${(value / 100).toFixed(2)}`.replace('.', ',')
    }

}