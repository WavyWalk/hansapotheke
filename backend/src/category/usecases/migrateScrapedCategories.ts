import {categoryRepository} from "../categoryRepository";
import {ICategory, IScrapeProduct, scrapedDataSample} from "../../../originalData/scrapedDataMigration";

class MigrateScrapedCategories {

    run = async (scrapedData: typeof scrapedDataSample) => {
        await this.prepareCategories(scrapedData)
    }

    protected prepareCategories = async (data: typeof scrapedDataSample) => {
        const categoryData = {
            secondaryCategories: this.prepareSecondaryCategories(data),
            primaryCategories: this.preparePrimaryCategories(data)
        }
        await categoryRepository.createFromScrapedData(categoryData.primaryCategories[0])
        for (let categoryName of categoryData.secondaryCategories) {
            await categoryRepository.create({name: categoryName, categoryType: 'SECONDARY'})
        }
    }

    protected prepareSecondaryCategories = (data: typeof scrapedDataSample): string[] => {
        let secondaryCategoryMap: any = {}
        data.forEach((it)=>{
            it.secondaryCategories.forEach((it)=>secondaryCategoryMap[it] = true)
        })
        return Object.keys(secondaryCategoryMap)
    }

    protected preparePrimaryCategories = (data: typeof scrapedDataSample): ICategory[] => {
        let allPrimaryCategories: {[id:string]: ICategory} = {}
        data.forEach((it)=>{
            it.primaryCategory.forEach((it)=>{
                it.split('/').reduce<string|null>((parentName, currentName)=>{
                    allPrimaryCategories[currentName] = allPrimaryCategories[currentName]
                        ?? {name: currentName, children: [], categoryType: 'PRIMARY'}
                    if (parentName) {
                        let parent = allPrimaryCategories[parentName]
                        if (!parent.children!.find((it)=>{return it.name === currentName})) {
                            parent.children!.push(allPrimaryCategories[currentName])
                        }
                    }
                    return currentName
                }, null)
            })
        })
        return Object.entries(allPrimaryCategories).map(([key, category]) => {
            return category
        })
    }

}

export const migrateScrapedCategories = new MigrateScrapedCategories()