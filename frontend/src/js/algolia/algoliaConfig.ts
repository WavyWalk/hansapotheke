import algoliasearch from 'algoliasearch'

export const algoliaConfigData = {

    appId: 'FLC890HPOA',
    apiKey: '21a67458155d077c70f2893b4a43fadb',
    indexName: 'hansotheke_dev',

    facets: {
        activeSubstances: {
            name: 'activeSubstances.value',
            humanReadableName: 'Active substances'
        },
        additiveSubstances: {
            name: 'additiveSubstances.value',
            humanReadableName: 'Additive substances'
        },
        brand: {
            name: 'brand',
            humanReadableName: 'Brand'
        },
        retailPrice: {
            name: 'retailPrice',
            humanReadableName: 'Price'
        },
        attributes: {
            name: 'attributes.value',
            humanReadableName: 'Attributes'
        },
        manufacturer: {
            name: 'manufacturer.value',
            humanReadableName: 'Manufacturer'
        },
        secondaryCategories: {
            name: 'secondaryCategories.value',
            humanReadableName: 'Secondary categories'
        },
        pharmaForm: {
            name: 'pharmaForm',
            humanReadableName: 'Pharma form'
        },
        packSize: {
            name: 'packSize',
            humanReadableName: 'Pack size'
        },
        prescriptionMedicine: {
            name: 'prescriptionMedicine',
            humanReadableName: "Prescription only"
        },
        fieldCategories: {
            names: [
                'primary.lvl0',
                'primary.lvl1',
                'primary.lvl2',
                'primary.lvl3',
                'primary.lvl4',
                'primary.lvl5',
            ]
        }
    }
}

export const getFacetsToRetrieve = () => {
    let result: any[] = []
    Object.keys(algoliaConfigData.facets).forEach((it: any)=>{
        const entry = (algoliaConfigData.facets as any)[it]
        if (entry.name) {
            result.push(entry.name)
        } else {
            result = result.concat(entry.names)
        }
    })
    return result
}

export const getSearchClient = () => {
    return algoliasearch(
        algoliaConfigData.appId,
        algoliaConfigData.apiKey
    )
}