import React from "react";
import {TreeSelect} from "../formelements/TreeSelect";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Product} from "../../models/Product";
import {Button, Spinner} from "reactstrap";
import {PrimaryModal} from "../modal/PrimaryModal";
import {TagNew} from "../tag/TagNew";
import {ProductNewFormState} from "../../states/ProductNewFormState";

const ManufacturerOfProductNew: React.FC<{
    formState: ProductNewFormState,
    product: Product
}> = ({formState, product}) => {

    return <div>
        <h3>Manufacturer</h3>
        {formState.manufacturersForSelect
            ? <TreeSelect
                formState={formState}
                model={product}
                label="Manufacturers"
                data={formState.getManufacturerTagsForSelect()}
                property={asKeyOf<Product>('manufacturer')}
                onChange={(value) => {
                    formState.handleManufacturerChange(value)
                }}
                validate={formState.validateManufacturer}
            />
            : <Spinner/>
        }
        <PrimaryModal
            isOpen={formState.manufacturerNewModeIsActive}
            onClose={()=>{formState.setManufacturerNewModeIsActive(false)}}
        >
            <TagNew
                tagType={'MANUFACTURER'}
                description={'Create manufacturer'}
                inputLabel={'Name'}
                createFunc={(tag)=>{return tag.createManufacturer()}}
                onCreated={()=> {
                    formState.setManufacturerNewModeIsActive(false)
                    formState.loadManufacturersForSelect(true)
                }}
            />
        </PrimaryModal>
        <div className="addNewButton d-flex justify-content-center">
            <Button
                size={'sm'}
                color={'primary'}
                onClick={()=>formState.setManufacturerNewModeIsActive(true)}
            >
                Create new manufacturer
            </Button>
        </div>
    </div>

}

export {ManufacturerOfProductNew}