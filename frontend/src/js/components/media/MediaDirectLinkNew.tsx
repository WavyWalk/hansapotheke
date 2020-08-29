import React, {useMemo, useRef} from "react";
import {MediaNewFormState} from "../../states/MediaNewFormState";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Product} from "../../models/Product";
import {PlainInput} from "../formelements/PlainInput";
import {Media} from "../../models/Media";
import {Button} from "reactstrap";

const MediaDirectLinkNew: React.FC<{
    onSubmit: (media: Media)=>any,
    existingMedia?: Media
}> = ({onSubmit, existingMedia}) => {

    const formState = useMemo(()=> {
        return new MediaNewFormState(existingMedia ?? new Media())
    }, [existingMedia]).use()
    const media = formState.model

    return <div>
        <PlainInput
            formState={formState}
            model={media}
            label={'Image link'}
            property={asKeyOf<Media>('path')}
            validate={formState.validatePath}
        />
        {formState.shouldShowPreview()
            && <img src={media.path}/>
        }
        <Button
            onClick={()=>{
                formState.validate()
                if (!media.isValid()) {
                    formState.update()
                    return
                }
                onSubmit?.(media)
            }}
        >
            OK
        </Button>
    </div>

}

export {MediaDirectLinkNew}