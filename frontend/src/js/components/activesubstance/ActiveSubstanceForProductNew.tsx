import {TreeSelect} from "../formelements/TreeSelect";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Product} from "../../models/Product";
import {Button, Spinner} from "reactstrap";
import {PrimaryModal} from "../modal/PrimaryModal";
import {TagNew} from "../tag/TagNew";
import React from "react";
import {ProductNewFormState} from "../../states/ProductNewFormState";

const ActiveSubstanceForProductNew: React.FC<{
    formState: ProductNewFormState
    product: Product
}> = ({formState, product}) => {

    return <div>
        <h3>Active substances</h3>
        {formState.activeSubstancesForSelect
            ? <TreeSelect
                formState={formState}
                model={product}
                label="Manufacturers"
                data={formState.getActiveSubstancesForSelect()}
                property={asKeyOf<Product>('activeSubstances')}
                onChange={(value) => {
                    formState.handleActiveSubstancesChange(value)
                }}
                validate={formState.validateActiveSubstances}
            />
            : <Spinner/>
        }
        <PrimaryModal
            isOpen={formState.activeSubstanceNewModeIsActive}
            onClose={() => {
                formState.setActiveSubstanceNewModeIsActive(false)
            }}
        >
            <TagNew
                tagType={'ACTIVE_SUBSTANCE'}
                description={'Create active substance'}
                inputLabel={'Name'}
                createFunc={(tag) => {
                    return tag.createActiveSubstance()
                }}
                onCreated={() => {
                    formState.setActiveSubstanceNewModeIsActive(false)
                    formState.loadActiveSubstancesForSelect(true)
                }}
            />
        </PrimaryModal>
        <div className="addNewButton d-flex justify-content-center">
            <Button
                size={'sm'}
                color={'primary'}
                onClick={() => formState.setActiveSubstanceNewModeIsActive(true)}
            >
                Create new active substance
            </Button>
        </div>
    </div>
}

export {ActiveSubstanceForProductNew}