import {IScrapedPrice, IScrapedTag, IScrapeMedia} from "../../originalData/scrapedDataMigration";

export class ProductFromExistingDataDto {
    activeSubstances?: IScrapedTag[]
    additiveSubstances?: IScrapedTag[]
    baseProductUidGroup?: string
    attributes?: IScrapedTag[]
    averageRating?: number
    brand?: string
    created?: string
    pzn?: string
    descriptionShort?: string
    manufacturer?: IScrapedTag[]
    productName?: string
    images?: IScrapeMedia[]
    pharmaForm?: string
    prescriptionMedicine?: boolean
    packSize?: string
    uid?: string
    isBaseProduct?: boolean
    baseProductUid?: string
    tags?: IScrapedTag[]
    prices?: IScrapedPrice[]
    primaryCategories?: string[]
    secondaryCategories?: string[]
}