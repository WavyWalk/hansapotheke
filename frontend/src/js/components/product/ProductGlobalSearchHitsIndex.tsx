import React from "react";
import {ModelCollection} from "../../libs/frontmodel/src";
import {ProductAlgoliaListItem} from "./ProductAlgoliaListItem";
import {Product} from "../../models/Product";
import { connectHits } from "react-instantsearch-dom";

const BaseHits: React.FC<{
    hits: any[]
}> = ({
          hits
      }) => {

    let products = new ModelCollection(...hits.map((it)=>{
        return new Product(it)
    }))

    return <div className="hits-index">
        {products.map((it)=>{
            return <ProductAlgoliaListItem key={it.id} product={it}/>
        })}
    </div>
}

const ProductGlobalSearchHitsIndex = connectHits(BaseHits)

export {ProductGlobalSearchHitsIndex}