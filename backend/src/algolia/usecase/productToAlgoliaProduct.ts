import {Product} from "../../product/Product";
import {modelUtils} from "../../utils/modelUtils";
import {ModelCollection} from "../../lib/frontmodel/src";
import {CategoryCache} from "../../category/CategoryCache";


interface ICategory {
    id?: number,
    name?: string,
    parentId?: number
    parent?: ICategory
}

interface ICategoryLevelAccumulator {
    [id: string]: {[id:string]: boolean}
}

class ProductToAlgoliaProduct {

    runForCollection = async (products: ModelCollection<Product>) => {
        const result = []
        for (let product of products.array) {
            let serialized = await this.run(product)
            result.push(serialized)
        }
        return result
    }

    run = async (product: Product) => {

        const hierarchicalCategoriesMap = await this.prepareCategoriesHierarchy(product.primaryCategories.array)
        const retailPrice = product.getRetailPrice()?.value

        product.secondaryCategories.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['name'])
        })
        product.primaryCategories.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['name'])
        })
        product.manufacturer.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['value'])
        })
        product.images.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['path'])
        })
        product.prices.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['value', 'priceType', 'currency'])
        })
        product.activeSubstances.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['value'])
        })
        product.additiveSubstances.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['value'])
        })
        product.attributes.array.forEach((it)=>{
            modelUtils.clearKeys(it, ['value'])
        })

        let serialized =  product.serialize()
        serialized.objectID = product.id
        serialized.retailPrice = retailPrice
        delete serialized['categories']

        Object.keys(hierarchicalCategoriesMap).forEach((it)=>{
            serialized[it] = hierarchicalCategoriesMap[it]
        })

        return serialized
    }

    private async prepareCategoriesHierarchy(categories: ICategory[]) {
        let result: ICategoryLevelAccumulator = {}
        const idMap = await CategoryCache.getMappedByIdWithParents()
        categories.forEach((it)=>{
            const category = idMap[it.id!] as ICategory
            result = this.makeCategoryLevels(result, category)
        })
        const toReturn: any = {}
        Object.keys(result).forEach((key)=>{
            const categoryNames = result[key]
            toReturn[`primary.${key}`] = Object.keys(categoryNames)
        })
        return toReturn
    }

    private makeCategoryLevels(accumulator: ICategoryLevelAccumulator, category: ICategory) {
        const topToBottom = []
        topToBottom.unshift(category.name!)
        let current = category.parent
        while (current) {
            topToBottom.unshift(current.name!)
            current = current.parent
            if (!current) {
                break
            }
        }
        return this.getLeveledCategories(accumulator, topToBottom, 0, null)
    }

    private getLeveledCategories(
        accumulator: ICategoryLevelAccumulator, topToBottom: string[],
        index: number, carry: string|null
    ): ICategoryLevelAccumulator {
        if (index >= topToBottom.length) {
            return accumulator
        }
        let name = topToBottom[index]
        if (!carry) {
            carry = name
        } else {
            carry = `${carry} > ${name}`
        }
        accumulator[`lvl${index}`] = accumulator[`lvl${index}`] ?? {}
        accumulator[`lvl${index}`][carry] = true
        return this.getLeveledCategories(accumulator, topToBottom, index + 1, carry)
    }


}

export const productToAlgoliaProduct = new ProductToAlgoliaProduct()