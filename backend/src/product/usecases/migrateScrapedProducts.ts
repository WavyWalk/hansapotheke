import {
    IScrapedPrice,
    IScrapedTag, IScrapeMedia,
    IScrapeProduct,
    scrapedDataSample
} from "../../../originalData/scrapedDataMigration";
import {mediaRepository} from "../../media/mediaRepository";
import {productRepository} from "../productRepository";
import {tagRepository} from "../../tag/TagRepository";
import {ProductFromExistingDataDto} from "../ProductFromExistingDataDto";
import {numberToCents} from "../../utils/numberUtils";

export class MigrateScrapedProducts {

    run = async (data: typeof scrapedDataSample) => {
        for (let entry of data) {
            await this.createProductFromScrapedData(entry)
        }
    }

    protected createProductFromScrapedData = async (productData: IScrapeProduct) => {
        let product = new ProductFromExistingDataDto()
        product.descriptionShort = productData.descriptionShort
        product.pharmaForm = productData.pharmaForm
        product.prescriptionMedicine = productData.prescriptionMedicine ?? false
        product.packSize = productData.packSize
        product.productName = productData.productName
        product.isBaseProduct = true
        product.uid = productData.masterID
        product.baseProductUid = product.uid
        product.pzn = productData.pzn
        product.packSize = productData.packSize
        product.brand = productData.brand
        product.pharmaForm = productData.pharmaForm
        product.prescriptionMedicine = productData.prescriptionMedicine
        product.tags = await this.prepareTags(productData) as IScrapedTag[]
        let image = await mediaRepository.createDirectLinkTypedImage(productData.image)
        product.images = [image as unknown as IScrapeMedia]
        product.prices = this.preparePrices(productData.prices) as IScrapedPrice[]
        product.primaryCategories = []
        productData.primaryCategory.forEach((it)=>{
            it.split('/').forEach((name)=>{
                if (product.primaryCategories!.indexOf(name) === -1) {
                    product.primaryCategories!.push(name)
                }
            })
        })
        product.secondaryCategories = []
        productData.secondaryCategories.forEach((it)=>{
            if (product.secondaryCategories!.indexOf(it) === -1) {
                product.secondaryCategories!.push(it)
            }
        })
        let persistedProduct = await productRepository.persistFromScrapedData(product)
    }

    protected prepareTags = async (productData: IScrapeProduct) => {
        let activeSubstances = await tagRepository.findOrCreateTagsByValue(productData.activeSubstances, 'ACTIVE_SUBSTANCE')
        let additiveSubstances = await tagRepository.findOrCreateTagsByValue(productData.additiveSubstances, 'ADDITIVE_SUBSTANCE')
        let attributes = await tagRepository.findOrCreateTagsByValue(productData.attributes, 'ATTRIBUTE')
        let brand = await tagRepository.findOrCreateTagsByValue([productData.brand], 'BRAND')
        let manufacturer = await tagRepository.findOrCreateTagsByValue([productData.manufacturer], 'MANUFACTURER')
        return [
            ...activeSubstances,
            ...additiveSubstances,
            ...attributes,
            ...brand,
            ...manufacturer
        ]
    }

    protected preparePrices = (prices: IScrapeProduct['prices']) => {
        let listPrice = prices.listPrice
        let retailPrice = prices.retailPrice
        const result = []
        listPrice && result.push({priceType: 'LIST', value: numberToCents(listPrice.net), currency: listPrice.currency})
        retailPrice && result.push({priceType: 'RETAIL', value: numberToCents(retailPrice.net), currency: retailPrice.currency})
        return result
    }

}

export const migrateScrapedProducts = new MigrateScrapedProducts()