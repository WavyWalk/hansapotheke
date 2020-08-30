import {productRepository} from "../../product/productRepository";
import {ModelCollection} from "../../lib/frontmodel/src";
import {Product} from "../../product/Product";
import {productToAlgoliaProduct} from "./productToAlgoliaProduct";
import {AlgoliaConnection} from "../AlgoliaConnection";
import {algoliaConfig} from "../../algoliaConfig";

class AlgoliaProductIndexer {

    run = async () => {
        const dbProducts = await productRepository.getAllForAlgolia()
        let products = new ModelCollection(...dbProducts.map(it => new Product(it)))
        let algoliaProducts = await productToAlgoliaProduct.runForCollection(products)
        let index = AlgoliaConnection.getIndexFor(algoliaConfig.indexName)
        await index.clearObjects()
        await index.saveObjects(algoliaProducts)
    }

    indexSingle = async (product: Product) => {
        const algoliaProduct = await productToAlgoliaProduct.run(product)
        let index = AlgoliaConnection.getIndexFor(algoliaConfig.indexName)
        await index.saveObject(algoliaProduct)
    }

}

export const algoliaProductIndexer = new AlgoliaProductIndexer()