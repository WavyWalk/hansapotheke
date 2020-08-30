class ModelUtils {
    clearKeys = <T>(model: T, preserveKeys: Array<keyof T>) => {
        let properties = (model as any).properties as any
        Object.keys(properties).forEach((it)=>{
            if (!preserveKeys.includes(it as any)) {
                delete properties[it]
            }
        })
    }
}

export const modelUtils = new ModelUtils()