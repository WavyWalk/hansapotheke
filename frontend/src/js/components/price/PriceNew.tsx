import {CURRENCIES_FOR_SELECT, IPriceType, Price} from "../../models/Price";
import {FormState} from "../../libs/formhandling/FormState";
import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";
import React from "react";
import {PlainInput} from "../formelements/PlainInput";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {DropdownSelect} from "../formelements/DropdownSelect";
import {Button} from "reactstrap";


type IPriceKey = keyof IPriceType

const typeToReadableName = {

}

const PriceNew: React.FC<{
    label: string
    price: Price
    formState: ProductNewFormState
    product: Product
}> = ({formState, product, price, label}) => {

    return <div>
        <p>{label}</p>
        <PlainInput
            formState={formState}
            model={price}
            label={`Value`}
            property={asKeyOf<Price>('value')}
            validate={()=>formState.validatePrice(price)}
        />
        {price.priceType === 'RETAIL_PRICE' &&
            <DropdownSelect
                formState={formState}
                model={price}
                selectPairs={CURRENCIES_FOR_SELECT}
                label={'Currency'}
                property={asKeyOf<Price>('currency')}
                onChange={(value: any)=>{
                    console.log(value)
                    product.getListPrice()!.currency = value
                }}
                validate={()=>formState.validatePrice(price)}
            />
        }
        {price.priceType === 'LIST_PRICE' && formState.priceCanBeCopiedFromRetailToListPrice() &&
            <Button
                onClick={()=>{
                    formState.copyPriceFromRetailToListPrice()
                }}
            >
                Copy from retail
            </Button>
        }
    </div>

}

export {PriceNew}