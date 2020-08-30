import React from "react";
import {algoliaConfigData} from "../../algolia/algoliaConfig";
import {DateRange} from "react-date-range";
import {RangeSliderRefinement} from "../facets/RangeSlider";
import {SingleSelect} from "../facets/SingleSelect";
import {RefinementList} from "react-instantsearch-dom";
import {HierarchicalMenu} from "../facets/HierarchicalMenu";

const ProductGlobalSearchFacetsIndex: React.FC = () => {

    return <div className="facets-index">
        <div className="hierarchical-menu-box">
            <p>Fachgebiete</p>
            <HierarchicalMenu
                attributes={[
                    'primary.lvl0',
                    'primary.lvl1',
                    'primary.lvl2',
                    'primary.lvl3',
                ]}
            />
        </div>
        <div className="menu-select-box">
            <p>Pharma form</p>
            <RefinementList
                attribute={algoliaConfigData.facets.pharmaForm.name}
            />
        </div>
        <div className="menu-select-box price-facet">
            <p>Preis</p>
            <RangeSliderRefinement
                attribute={algoliaConfigData.facets.retailPrice.name}
            />
        </div>
        <div className="menu-select-box">
            <p>Pack size</p>
            <RefinementList
                attribute={algoliaConfigData.facets.packSize.name}
            />
        </div>
        <div className="menu-select-box dropdown-facet">
            <p>Brand</p>
            <RefinementList
                attribute={algoliaConfigData.facets.brand.name}>

            </RefinementList>
        </div>
        <div className="menu-select-box dropdown-facet">
            <p>Prescription only</p>
            <RefinementList
                attribute={algoliaConfigData.facets.prescriptionMedicine.name}>

            </RefinementList>
        </div>
        <div className="menu-select-box dropdown-facet">
            <p>Attributes</p>
            <RefinementList
                attribute={algoliaConfigData.facets.attributes.name}>

            </RefinementList>
        </div>
    </div>


}

export {ProductGlobalSearchFacetsIndex}