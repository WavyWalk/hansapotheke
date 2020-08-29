import {App} from "../App";
import {Runtime} from "inspector";

export type ICategoryCreate = Parameters<typeof App.prisma.category.create>[0]
export type ICategoryType = 'PRIMARY' | 'SECONDARY'

