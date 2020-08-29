import {App} from "../App";
import {IScrapeProduct} from "../../originalData/scrapedDataMigration";

class PriceRepository {

    createPriceForScrapedProduct = async (price: IScrapeProduct['prices']['retailPrice'], productId: number, priceType: 'LIST' | 'RETAIL') => {
        let data = {
            productId,
            value: price.net,
            currency: price.currency,
            priceType
        }
        return await App.prisma.price.create({
            data
        })
    }

}

export const priceRepository = new PriceRepository()