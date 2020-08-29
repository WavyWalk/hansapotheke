require('dotenv').config()
import { App } from "./App";
import path from 'path'

export const PROJECT_DIR = path.resolve(__dirname, '../')

console.log(PROJECT_DIR)

App.init().catch((e)=>{
    throw e
}).finally(async ()=> {
    App.prisma.$disconnect()
})

