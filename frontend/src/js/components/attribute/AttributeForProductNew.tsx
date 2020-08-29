import React from "react";
import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";
import {TreeSelect} from "../formelements/TreeSelect";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Button, Spinner} from "reactstrap";
import {PrimaryModal} from "../modal/PrimaryModal";
import {TagNew} from "../tag/TagNew";

const AttributeForProductNew: React.FC<{
    formState: ProductNewFormState
    product: Product
}> = ({formState, product}) => {

    return  <div>
        <h3>Attribute</h3>
        {formState.attributesForSelect
            ? <TreeSelect
                formState={formState}
                model={product}
                label="Properties substances"
                data={formState.getAttributesForSelect()}
                property={asKeyOf<Product>('attributes')}
                onChange={(value) => {
                    formState.handleAttributeChange(value)
                }}
                validate={formState.validateAttributes}
            />
            : <Spinner/>
        }
        <PrimaryModal
            isOpen={formState.attributesNewModeIsActive}
            onClose={()=>{formState.setAttributesNewModeIsActive(false)}}
        >
            <TagNew
                tagType={'ATTRIBUTE'}
                description={'Create attribute substance'}
                inputLabel={'Name'}
                createFunc={(tag)=>{return tag.createAttribute()}}
                onCreated={()=> {
                    formState.setAttributesNewModeIsActive(false)
                    formState.loadAttributesForSelect(true)
                }}
            />
        </PrimaryModal>
        <div className="addNewButton d-flex justify-content-center">
            <Button
                size={'sm'}
                color={'primary'}
                onClick={()=>formState.setAttributesNewModeIsActive(true)}
            >
                Create new attribute
            </Button>
        </div>
    </div>
}

export {AttributeForProductNew}