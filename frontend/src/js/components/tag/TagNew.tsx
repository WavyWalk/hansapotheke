import {TagTypes} from "../../models/tag/tagTypes";
import React, {useMemo, useState} from "react";
import {TagNewFormState} from "../../states/TagNewFormState";
import {Tag} from "../../models/Tag";
import {PlainInput} from "../formelements/PlainInput";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import Spinner from "reactstrap/lib/Spinner";
import {RequestOptions} from "../../libs/frontmodel/src";

const TagNew: React.FC<{
    tagType: TagTypes
    description: any
    inputLabel: string
    createFunc: (tag: Tag)=>Promise<Tag>,
    onCreated: (tag: Tag)=>any
}> = ({tagType, description, inputLabel, createFunc, onCreated}) => {

    const formState = useMemo(()=>{
        return new TagNewFormState(new Tag({tagType}))
    }, []).use()

    const tag = formState.model

    const create = async () => {
        formState.validate()
        if (!tag.isValid()) {
            formState.update()
            return
        }
        const result = await createFunc(tag)
        onCreated(result)
    }

    return <div>
        <h3>{description}</h3>
        <PlainInput
            formState={formState}
            model={tag}
            label={inputLabel}
            property={asKeyOf<Tag>('value')}
        />
        <button
            onClick={create}
        >
            Create
        </button>
    </div>
}

export {TagNew}