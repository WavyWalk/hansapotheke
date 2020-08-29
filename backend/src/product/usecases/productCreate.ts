import {Product} from "../Product";
import {ModelCollection} from "../../lib/frontmodel/src";
import {Category} from "../../category/Category";
import {CategoryCache} from "../../category/CategoryCache";
import {App} from "../../App";
import {numberToCents} from "../../utils/numberUtils";

class ProductCreate {

    run = async (payload: any) => {
        let product = new Product(payload)
        let productData = {
            ...this.buildBaseProductData(product),
            tags: {connect: this.buildTagsToConnect(product)},
            categories:  await this.buildCategories(
                product.primaryCategories,
                product.secondaryCategories
            ),
            prices: this.buildPrices(product),
            images: this.buildImagesData(product)
        }
        const persisted = await App.prisma.product.create({
            data: productData,
            include: {
                tags: true,
                categories: true,
                prices: true,
                images: true
            }
        })
        const createdInstance = new Product(persisted)
        createdInstance.normalizeTags()
        return createdInstance
    }

    buildTagsToConnect = (product: Product) => {
        const allTags: {id?: number}[] = [
            ...product.manufacturer.array,
            ...product.activeSubstances.array,
            ...product.additiveSubstances.array,
            ...product.attributes.array
        ]
        return allTags.map((it)=>{
            return {
                id: it.id!
            }
        })
    }

    buildCategories = async (
        primaryCategories: ModelCollection<Category>,
        secondaryCategories: ModelCollection<Category>,
    ) => {
        const data: {connect: {id: number}[]} = {connect: []}
        const categoryIdsToAdd: {[id:number]: number} = {}
        const categoryMap = await CategoryCache.getMappedByIdWithParents()
        primaryCategories.array.forEach((it)=>{
            const id = it.id!
            const category = categoryMap[id]
            categoryIdsToAdd[id] = id
            this.addAllCategoryParents(category, categoryIdsToAdd)
        });

        secondaryCategories.array.forEach((it)=>{
            categoryIdsToAdd[it.id!] = it.id!
        })
        let ids = (Object.values(categoryIdsToAdd)).map((id)=>{
            return {
                id
            }
        })
        data.connect = ids
        return data
    }


    addAllCategoryParents(category: Category, categoryIdsToAdd: { [p: number]: number }) {
        if (category.parent) {
            categoryIdsToAdd[category.parent.id!] = category.parent.id!
            this.addAllCategoryParents(category.parent!, categoryIdsToAdd)
        }
    }

    buildPrices = (product: Product) => {
        let data: Parameters<typeof App.prisma.product.create>[0]['data']['prices'] = {create: []}
        data!.create = product.prices.array.map((it)=>{
            return {
                value: numberToCents(it.value!),
                priceType: it.priceType
            }
        })
        return data
    }

    buildImagesData = (product: Product) => {
        let data: Parameters<typeof App.prisma.product.create>[0]['data']['images'] = {create: []}
        data!.create = product.images.array.map((it)=>{
            return {
                driver: it.driver,
                path: it.path,
                mediaType: 'IMAGE'
            }
        })
        return data
    }

    buildBaseProductData(product: Product) {
        let data: Parameters<typeof App.prisma.product.create>[0]['data'] = {
            uid: product.uid!,
            pharmaForm: product.pharmaForm,
            pzn: product.pzn,
            packSize: product.packSize,
            productName: product.productName,
            descriptionShort: product.descriptionShort,
        }
        return data
    }
}

export const productCreate = new ProductCreate()