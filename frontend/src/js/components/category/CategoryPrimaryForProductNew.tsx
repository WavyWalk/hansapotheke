import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";
import {TreeSelect} from "../formelements/TreeSelect";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Spinner} from "reactstrap";
import React from "react";

const CategoryPrimaryForProductNew: React.FC<{
    formState: ProductNewFormState
    product: Product
}> = ({formState, product}) => {

    return <div>
        <h3>Primary categories</h3>
        {formState.primaryCategoriesForSelect
            ? <TreeSelect
                formState={formState}
                model={product}
                label="Primary categories"
                data={formState.getPrimaryCategoriesForSelect()}
                property={asKeyOf<Product>('primaryCategories')}
                onChange={(value)=>{
                    formState.handlePrimaryCategoryChange(value, product.primaryCategories)
                }}
                validate={formState.validatePrimaryCategories}
            />
            : <Spinner/>
        }
    </div>

}

export {CategoryPrimaryForProductNew}