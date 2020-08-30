import React, {useState} from "react"
import ReactSlider from "react-slider"
import {connectRange} from "react-instantsearch-dom"
import {GlobalSearchState} from "../../states/GlobalSearchState"

const RangeSlider: React.FC<{
    min: number | undefined
    max: number | undefined
    currentRefinement: {min: any, max: any}
    refine: (...ags: any[]) => any
    precision: any
}> = ({precision, min, max, currentRefinement, refine, ...props}) => {

    const [initial, setInitial] = useState({min, max})

    if (initial.max === undefined || initial.min === undefined) {
        if (min !== undefined) {
            initial.min = min
            setInitial(initial as any)
        }
        if (max !== undefined) {
            initial.max = max
            setInitial(initial as any)
        }
        return null
    }

    const formatPrice = (value: any) => {
        if (!value) {
            return null
        }
        return (value / 100).toFixed(2)
    }

    return <ReactSlider
        defaultValue={[initial.min, initial.max]}
        minDistance={5}
        min={initial.min}
        max={initial.max}
        orientation="horizontal"
        onAfterChange={(values: any)=>{
            const [min, max] = values
            GlobalSearchState.instance.refinePrice(min, max)
        }}
        renderThumb={(props: any)=>{
            return <div {...props}>
                <span className="current-range-value">
                    {formatPrice(props['aria-valuenow'])}
                </span>
            </div>
        }}
    >

    </ReactSlider>
}

const RangeSliderRefinement = connectRange(RangeSlider)

export {RangeSliderRefinement}
