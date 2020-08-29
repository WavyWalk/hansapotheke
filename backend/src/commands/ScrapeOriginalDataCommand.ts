import {PROJECT_DIR} from "../index"
import {
    createProductFromScrapedData,
    prepareCategories,
    scrapedDataSample
} from "../../originalData/scrapedDataMigration";
import * as fs from 'fs'
import {categoryRepository} from "../category/categoryRepository";

export class ScrapeOriginalDataCommand {

    static async run() {
        let content = fs.readFileSync(`${PROJECT_DIR}/originalData/scrapedData.json`).toString()
        let parsed = JSON.parse(content)
        // await prepareCategories(parsed)
        await createProductFromScrapedData(scrapedDataSample[0])
    }

}