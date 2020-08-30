import {PROJECT_DIR} from "../index"
import {
    scrapedDataSample
} from "../../originalData/scrapedDataMigration";
import * as fs from 'fs'
import {categoryRepository} from "../category/categoryRepository";
import {migrateScrapedCategories} from "../category/usecases/migrateScrapedCategories";
import {migrateScrapedProducts} from "../product/usecases/migrateScrapedProducts";

export class ScrapeOriginalDataCommand {

    static async run() {
        let content = fs.readFileSync(`${PROJECT_DIR}/originalData/scrapedData.json`).toString()
        let parsed = JSON.parse(content)
        // await migrateScrapedCategories.run(parsed)
        await migrateScrapedProducts.run(parsed.slice(0, 10))
    }

}