import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";
import {TreeSelect} from "../formelements/TreeSelect";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Spinner} from "reactstrap";
import React from "react";

const CategorySecondaryForProductNew: React.FC<{
    formState: ProductNewFormState
    product: Product
}> = ({formState, product}) => {

    return <div>
        <h3>Secondary categories</h3>
        {formState.secondaryCategoriesForSelect
            ? <TreeSelect
                formState={formState}
                model={product}
                label="Secondary categories"
                data={formState.getSecondaryCategoriesForSelect()}
                property={asKeyOf<Product>('secondaryCategories')}
                onChange={(value)=>{
                    formState.handleSecondaryChange(value, product.secondaryCategories)
                }}
                validate={formState.validateSecondaryCategories}
            />
            : <Spinner/>
        }
    </div>

}

export {CategorySecondaryForProductNew}