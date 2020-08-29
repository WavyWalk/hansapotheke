import {App} from "../App";
import {Product} from "./Product";

class ProductRepository {

    create = async (data: Parameters<typeof App.prisma.product.create>[0]) => {
        return await App.prisma.product.create(data)
    }

    findOne = async (data: Parameters<typeof App.prisma.product.findMany>[0]) => {
        let found =  await App.prisma.product.findMany({...data, take: 1})
        let result = found[0]
        if (!result) {
            return null
        }
        return new Product(result)
    }

    isUidExists = async (uid: string) => {
        return (await App.prisma.product.findMany({where: {uid}, take: 1})).length > 0
    }

}


export const productRepository = new ProductRepository()