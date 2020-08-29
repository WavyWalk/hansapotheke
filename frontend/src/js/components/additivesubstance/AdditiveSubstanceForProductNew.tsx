import {TreeSelect} from "../formelements/TreeSelect";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Product} from "../../models/Product";
import {Button, Spinner} from "reactstrap";
import {PrimaryModal} from "../modal/PrimaryModal";
import {TagNew} from "../tag/TagNew";
import React from "react";
import {ProductNewFormState} from "../../states/ProductNewFormState";

const AdditiveSubstanceForProductNew: React.FC<{
    formState: ProductNewFormState,
    product: Product
}> = ({formState, product}) => {

    return <div>
        <h3>Additive substances</h3>
        {formState.additiveSubstancesForSelect
            ? <TreeSelect
                formState={formState}
                model={product}
                label="Additive substances"
                data={formState.getAdditiveSubstancesForSelect()}
                property={asKeyOf<Product>('additiveSubstances')}
                onChange={(value) => {
                    formState.handleAdditiveSubstanceChange(value)
                }}
                validate={formState.validateAdditiveSubstances}
            />
            : <Spinner/>
        }
        <PrimaryModal
            isOpen={formState.additiveSubstanceNewModeIsActive}
            onClose={()=>{formState.setAdditiveSubstanceNewModeIsActive(false)}}
        >
            <TagNew
                tagType={'ADDITIVE_SUBSTANCE'}
                description={'Create additive substance'}
                inputLabel={'Name'}
                createFunc={(tag)=>{return tag.createAdditiveSubstance()}}
                onCreated={()=> {
                    formState.setAdditiveSubstanceNewModeIsActive(false)
                    formState.loadAdditiveSubstancesForSelect(true)
                }}
            />
        </PrimaryModal>
        <div className="addNewButton d-flex justify-content-center">
            <Button
                size={'sm'}
                color={'primary'}
                onClick={()=>formState.setAdditiveSubstanceNewModeIsActive(true)}
            >
                Create new additive substance +
            </Button>
        </div>
    </div>
}

export {AdditiveSubstanceForProductNew}