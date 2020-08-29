import React from "react"
import DropdownTreeSelect from 'react-dropdown-tree-select'
import {FormState} from "../../libs/formhandling/FormState"
import {BaseModel} from "../../libs/frontmodel/src";
import {ModelCollection} from "../../libs/frontmodel/src"

const TreeSelect: React.FC<{
    onChange?: (value: any)=>any
    formState: FormState,
    model: BaseModel | any
    label: string
    validate?: (model: BaseModel | any)=>any
    data: any[]
    property: string
    showValidity?: boolean
}> = ({
    model,
    formState,
    label,
    property,
    onChange,
    validate,
    showValidity = false,
    data
}) => {

    let error = model.getFirstErrorFor(property)

    return <div className="tree-select">
        {error &&
            <div className={`isInvalid`}>
                {error}
            </div>
        }
        <DropdownTreeSelect
            data={data}
            onChange={(currentNode, selectedNodes)=>{
                onChange?.(currentNode)
                validate?.(currentNode)
            }}
            showPartiallySelected={true}
            mode="hierarchical"
        />
    </div>
}

export {TreeSelect}