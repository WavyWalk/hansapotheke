import {App} from "../App";
import {Product} from "./Product";
import {categoryRepository} from "../category/categoryRepository";
import {ProductFromExistingDataDto} from "./ProductFromExistingDataDto";

class ProductRepository {

    create = async (data: Parameters<typeof App.prisma.product.create>[0]) => {
        return await App.prisma.product.create(data)
    }

    findOneForShow = async (id: number) => {
        let found =  await App.prisma.product.findMany({
            where: {
                id
            },
            include: {
                tags: true,
                categories: true,
                prices: true,
                images: true
            },
            take: 1
        })
        let result = found[0]
        if (!result) {
            return null
        }
        return new Product(result)
    }

    isUidExists = async (uid: string) => {
        return (await App.prisma.product.findMany({where: {uid}, take: 1})).length > 0
    }

    persistFromScrapedData = async (product: ProductFromExistingDataDto) => {
        let tagsToConnect = product.tags!.filter(it => !!it.id).map((it) => {
            return {id: it.id}
        })
        let imagesToConnect = product.images?.filter(it => !!it.id).map(it => {
            return {id: it.id}
        })
        let pricesToCreate = product.prices?.map(it => {
                return {value: it.value, priceType: it.priceType, currency: it.currency}
            }
        ) ?? []
        let existingCategories = await categoryRepository.find({
            where: {
                OR: [
                    {name: {in: product.primaryCategories}, categoryType: 'PRIMARY'},
                    {name: {in: product.secondaryCategories}, categoryType: 'SECONDARY'},
                ]
            },
        })
        return await App.prisma.product.create({
            data: {
                uid: product.uid!,
                productName: product.productName,
                isBaseProduct: product.isBaseProduct,
                descriptionShort: product.descriptionShort,
                baseProductUidGroup: product.baseProductUid,
                pharmaForm: product.pharmaForm,
                pzn: product.pzn,
                packSize: product.packSize,
                tags: {
                    connect: tagsToConnect
                },
                images: {
                    connect: imagesToConnect
                },
                prices: {
                    create: pricesToCreate
                },
                categories: {
                    connect: existingCategories?.map(it => {
                        return {id: it.id}
                    })
                }
            }
        })
    }

}


export const productRepository = new ProductRepository()

