import {App} from "../src/App";
import { v4 as uuidv4 } from 'uuid';
import {ICategoryType} from "../src/category/categoryTypes";
import {CategoryCache} from "../src/category/CategoryCache";
import {categoryRepository} from "../src/category/categoryRepository";


export const scrapedDataSample = [{"brandCode":"csd01624","pzn":"07493431","productName":"SymbioLact® A","secondaryCategories":["Ratgeber","Darmflora"],"manufacturer":"SymbioPharm GmbH","pharmaForm":"Beutel","brand":"SymbioLact","brandIntern":"SYMBIO LACT®","subBrandIntern":"A","activeSubstances":["Biotin","Milchsäurebakterienkultur"],"additiveSubstances":["Maltodextrin","Siliciumdioxid"],"additiveSubstancesHtml":"<ul><li>Maltodextrin</li><li>Siliciumdioxid</li></ul>","descriptionShort":"Zur Unterstützung einer gesunden Darmflora.","keywords":[],"unit":"St","unitQuantityString":"30","masterID":"07493431","indicationRanges":["Ohne Angabe einer Indikation, da Nichtarzneimittel"],"ratingCount":5,"averageRating":4.83,"attributes":["Lebensmittel","Nahrungsergänzungsmittel"],"prescriptionMedicine":false,"price":2728,"listPrice":3213,"netRetailPrice":2598,"priceFormatted":"€ 27,28","listPriceFormatted":"€ 32,13","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/symbiolact-a-beutel-D07493431-p1.jpg","hasImage":true,"deeplink":"arzneimittel/7493431/symbiolact-a.htm","applicablePromotions":"","variantDetails":"07493431|07493431|15|30 St|2728|arzneimittel/7493431/symbiolact-a.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":15,"created":1445168110000,"lastChanged":1598546272000,"ratingsLink":"/produktbewertungen/7493431/symbiolact-a.htm","ean":"","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte ","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Magen & Darm","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Magen & Darm/Regulierung der Darmflora"],"topsellerCountBucket":8,"filterAttributes":["Lebensmittel","Nahrungsergänzungsmittel"],"filterRating":0.17,"packSize":"30 St","variants":[{"id":"07493431","text":"Zur Unterstützung einer gesunden Darmflora.","webDetailPath":"arzneimittel/7493431/symbiolact-a.htm","stock":"product.stockStatus.available","active":true,"discount":"15","retailPrice":"2728","listPrice":"3213","packSize":"30 St","nowProductGroup":"sameday_nextday","attributes":["Lebensmittel","Nahrungsergänzungsmittel"],"productName":"SymbioLact® A","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/symbiolact-a-beutel-D07493431-p1.jpg","pharmaForm":"Beutel","ribbonText":"","RPMultiplier":"1"},{"id":"00171871","text":"Mit Milchsäure bildenden Bakterien und Biotin für den Dünndarm","webDetailPath":"arzneimittel/171871/symbiolact-a.htm","stock":"product.stockStatus.available","active":false,"discount":"8","retailPrice":"7535","listPrice":"8164","packSize":"3X30 St","nowProductGroup":"sameday_nextday","attributes":["Lebensmittel","Nahrungsergänzungsmittel"],"productName":"SymbioLact® A","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/symbiolact-a-beutel-D00171871-p1.jpg","pharmaForm":"Beutel","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":true,"nowProductGroup":"sameday_nextday","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00001","csd00219","csd00228","root","catalogs","main","themeshop","csd03065"],"prices":{"listPrice":{"amount":32.13,"net":30.6,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":27.28,"net":25.98,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.71,"objectID":"07493431","_highlightResult":{"activeSubstances":[{"value":"Biotin","matchLevel":"none","matchedWords":[]},{"value":"Milchsäurebakterienkultur","matchLevel":"none","matchedWords":[]}]},"_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":100,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":0,"newPosition":0}}},{"brandCode":"","pzn":"08104695","productName":"Outdoor-Set Insectolin + Apis Mellifica D6","secondaryCategories":["Reiseapotheke","Reisesets","Homöopathie & Naturprodukte","Sets","Einzelmittel","A","Hausapotheke","% Hausapotheke Spar-Sets %","Landingpages","Insektenschutz & Sonnenbrand","Landingpages","Mücken- und Sonnenschutz"],"manufacturer":"DHU-Arzneimittel GmbH & Co. KG","pharmaForm":"Set","brand":"","brandIntern":"DHU","subBrandIntern":"","activeSubstances":[],"additiveSubstances":[],"additiveSubstancesHtml":"","descriptionShort":"Frühlingshelfer für Groß und Klein","keywords":["insektenstich","insekten","insektenschutz","apis","Apis Mellifica","reiseset"],"unit":"St","unitQuantityString":"1","masterID":"08104695","indicationRanges":[],"ratingCount":0,"averageRating":0,"attributes":["apothekenpflichtig","Arzneimittel"],"prescriptionMedicine":false,"price":1149,"listPrice":1725,"netRetailPrice":991,"priceFormatted":"€ 11,49","listPriceFormatted":"€ 17,25","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/outdoor-set-insectolin-apis-mellifica-d6-set-D08104695-p1.jpg","hasImage":true,"deeplink":"homoeopathie/8104695/outdoor-set-insectolin-apis-mellifica-d6.htm","applicablePromotions":"promotion=Sparsets","variantDetails":"08104695|08104695|33|1 St|1149|homoeopathie/8104695/outdoor-set-insectolin-apis-mellifica-d6.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":33,"created":1551698184000,"lastChanged":1598484763000,"ratingsLink":"/produktbewertungen/8104695/outdoor-set-insectolin-apis-mellifica-d6.htm","ean":"","RPMultiplier":1,"ribbonText":"Sparset","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte ","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Haus- & Reiseapotheke","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Haus- & Reiseapotheke/Reiseapotheke","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Haus- & Reiseapotheke/Reiseapotheke/Insekten- & Mückenschutz"],"topsellerCountBucket":6,"filterAttributes":[],"filterRating":5,"packSize":"1 St","variants":[{"id":"08104695","text":"Frühlingshelfer für Groß und Klein","webDetailPath":"homoeopathie/8104695/outdoor-set-insectolin-apis-mellifica-d6.htm","stock":"product.stockStatus.available","active":true,"discount":"33","retailPrice":"1149","listPrice":"1725","packSize":"1 St","nowProductGroup":"sameday_nextday","attributes":["apothekenpflichtig","Arzneimittel"],"productName":"Outdoor-Set Insectolin + Apis Mellifica D6","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/outdoor-set-insectolin-apis-mellifica-d6-set-D08104695-p1.jpg","pharmaForm":"Set","ribbonText":"Sparset","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"sameday_nextday","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00001","csd00077","csd00116","csd01578","csd00119","csd00850","csd00914","csd00915","csd01573","csd02753","csd03091","root","catalogs","main","landingpages","csd04004","csd04412"],"prices":{"listPrice":{"amount":17.25,"net":14.87,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":11.49,"net":9.91,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.5,"objectID":"08104695","_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":99,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":1,"newPosition":1}}},{"brandCode":"","pzn":"03578107","productName":"formoline A Figurtropfen","secondaryCategories":[],"manufacturer":"Certmedica International GmbH","pharmaForm":"Tropfen","brand":"","brandIntern":"formoline","subBrandIntern":"A","activeSubstances":["Fucus vesiculosus D6"],"additiveSubstances":["Ethanol"],"additiveSubstancesHtml":"<ul><li>Ethanol</li></ul>","descriptionShort":"Homöopathisches Arzneimittel zur unterstützenden Behandlung von Übergewicht","keywords":["diät"],"unit":"ml","unitQuantityString":"100","masterID":"03578107","indicationRanges":["Antiadiposita","Homöopathika"],"ratingCount":1,"averageRating":5,"attributes":["apothekenpflichtig","homöopathisch","Arzneimittel"],"prescriptionMedicine":false,"price":2771,"listPrice":3402,"netRetailPrice":2389,"priceFormatted":"€ 27,71","listPriceFormatted":"€ 34,02","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/formoline-a-figurtropfen-tropfen-D03578107-p1.jpg","hasImage":true,"deeplink":"homoeopathie/3578107/formoline-a-figurtropfen.htm","applicablePromotions":"","variantDetails":"03578107|03578107|19|100 ml|2771|homoeopathie/3578107/formoline-a-figurtropfen.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"27,71 € / 100 ml","discountInPercent":19,"created":1445168425000,"lastChanged":1598483270000,"ratingsLink":"/produktbewertungen/3578107/formoline-a-figurtropfen.htm","ean":"","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch/Abnehmen"],"topsellerCountBucket":5,"filterAttributes":["homöopathisch"],"filterRating":0,"packSize":"100 ml","variants":[{"id":"03578107","text":"Homöopathisches Arzneimittel zur unterstützenden Behandlung von Übergewicht","webDetailPath":"homoeopathie/3578107/formoline-a-figurtropfen.htm","stock":"product.stockStatus.available","active":true,"discount":"19","retailPrice":"2771","listPrice":"3402","packSize":"100 ml","nowProductGroup":"none","attributes":["apothekenpflichtig","homöopathisch","Arzneimittel"],"productName":"formoline A Figurtropfen","pricePerUnit":"27,71 € / 100 ml","imageUrl":"https://cdn.shop-apotheke.com/images/formoline-a-figurtropfen-tropfen-D03578107-p1.jpg","pharmaForm":"Tropfen","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"none","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00850","csd00851","csd00852","csd00853"],"prices":{"listPrice":{"amount":34.02,"net":29.33,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":27.71,"net":23.89,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.55,"objectID":"03578107","_highlightResult":{"activeSubstances":[{"value":"Fucus vesiculosus D6","matchLevel":"none","matchedWords":[]}]},"_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":98,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":2,"newPosition":2}}},{"brandCode":"","pzn":"08104694","productName":"Homöopathie Für alle Fälle-Set","secondaryCategories":["Homöopathisch","Hautpflege","Einzelmittel","A","Haut","Homöopathische Produkte","Homöopathie & Naturprodukte","Sets","Hausapotheke","% Hausapotheke Spar-Sets %"],"manufacturer":"DHU-Arzneimittel GmbH & Co. KG","pharmaForm":"Set","brand":"","brandIntern":"DHU","subBrandIntern":"","activeSubstances":[],"additiveSubstances":[],"additiveSubstancesHtml":"","descriptionShort":"Für alle Fälle gut versorgt","keywords":["Arnika","Arnica","arnika salbe","arnika globuli","Arnica Salbe","Arnica globuli","arnica D6","arnikasalbe"],"unit":"St","unitQuantityString":"1","masterID":"08104694","indicationRanges":[],"ratingCount":0,"averageRating":0,"attributes":["apothekenpflichtig","Arzneimittel"],"prescriptionMedicine":false,"price":1699,"listPrice":2495,"netRetailPrice":1465,"priceFormatted":"€ 16,99","listPriceFormatted":"€ 24,95","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/homoeopathie-fuer-alle-faelle-set-set-D08104694-p1.jpg","hasImage":true,"deeplink":"homoeopathie/8104694/homoeopathie-fuer-alle-faelle-set.htm","applicablePromotions":"promotion=Sparsets","variantDetails":"08104694|08104694|32|1 St|1699|homoeopathie/8104694/homoeopathie-fuer-alle-faelle-set.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":32,"created":1551693678000,"lastChanged":1598484763000,"ratingsLink":"/produktbewertungen/8104694/homoeopathie-fuer-alle-faelle-set.htm","ean":"","RPMultiplier":1,"ribbonText":"Sparset","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch/Schmerzen"],"topsellerCountBucket":4,"filterAttributes":[],"filterRating":5,"packSize":"1 St","variants":[{"id":"08104694","text":"Für alle Fälle gut versorgt","webDetailPath":"homoeopathie/8104694/homoeopathie-fuer-alle-faelle-set.htm","stock":"product.stockStatus.available","active":true,"discount":"32","retailPrice":"1699","listPrice":"2495","packSize":"1 St","nowProductGroup":"nextday","attributes":["apothekenpflichtig","Arzneimittel"],"productName":"Homöopathie Für alle Fälle-Set","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/homoeopathie-fuer-alle-faelle-set-set-D08104694-p1.jpg","pharmaForm":"Set","ribbonText":"Sparset","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"nextday","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00850","csd00851","csd00852","csd00878","csd00864","csd00914","csd00915","csd00001","csd00144","csd00158","csd01085","csd01573","csd00077","csd02753","csd03091"],"prices":{"listPrice":{"amount":24.95,"net":21.51,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":16.99,"net":14.65,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.5,"objectID":"08104694","_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":97,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":3,"newPosition":3}}},{"brandCode":"","pzn":"03577415","productName":"formoline A Figurtropfen","secondaryCategories":[],"manufacturer":"Certmedica International GmbH","pharmaForm":"Tropfen","brand":"","brandIntern":"formoline","subBrandIntern":"A","activeSubstances":["Fucus vesiculosus D6"],"additiveSubstances":["Ethanol"],"additiveSubstancesHtml":"<ul><li>Ethanol</li></ul>","descriptionShort":"Homöopathisches Arzneimittel zur unterstützenden Behandlung von Übergewicht","keywords":[],"unit":"ml","unitQuantityString":"50","masterID":"03577415","indicationRanges":["Antiadiposita","Homöopathika"],"ratingCount":1,"averageRating":0,"attributes":["apothekenpflichtig","homöopathisch","Arzneimittel"],"prescriptionMedicine":false,"price":1564,"listPrice":1930,"netRetailPrice":1348,"priceFormatted":"€ 15,64","listPriceFormatted":"€ 19,30","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/formoline-a-figurtropfen-tropfen-D03577415-p1.jpg","hasImage":true,"deeplink":"homoeopathie/3577415/formoline-a-figurtropfen.htm","applicablePromotions":"","variantDetails":"03577415|03577415|19|50 ml|1564|homoeopathie/3577415/formoline-a-figurtropfen.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"31,28 € / 100 ml","discountInPercent":19,"created":1445171119000,"lastChanged":1598483269000,"ratingsLink":"/produktbewertungen/3577415/formoline-a-figurtropfen.htm","ean":"","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch/Abnehmen"],"topsellerCountBucket":3,"filterAttributes":["homöopathisch"],"filterRating":5,"packSize":"50 ml","variants":[{"id":"03577415","text":"Homöopathisches Arzneimittel zur unterstützenden Behandlung von Übergewicht","webDetailPath":"homoeopathie/3577415/formoline-a-figurtropfen.htm","stock":"product.stockStatus.available","active":true,"discount":"19","retailPrice":"1564","listPrice":"1930","packSize":"50 ml","nowProductGroup":"none","attributes":["apothekenpflichtig","homöopathisch","Arzneimittel"],"productName":"formoline A Figurtropfen","pricePerUnit":"31,28 € / 100 ml","imageUrl":"https://cdn.shop-apotheke.com/images/formoline-a-figurtropfen-tropfen-D03577415-p1.jpg","pharmaForm":"Tropfen","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"none","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00850","csd00851","csd00852","csd00853"],"prices":{"listPrice":{"amount":19.3,"net":16.64,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":15.64,"net":13.48,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.45,"objectID":"03577415","_highlightResult":{"activeSubstances":[{"value":"Fucus vesiculosus D6","matchLevel":"none","matchedWords":[]}]},"_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":96,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":4,"newPosition":4}}},{"brandCode":"","pzn":"14257122","productName":"GU Quickfinder Homöopathie ","secondaryCategories":["Geschenke Themenwelt","Gesundheit schenken","Einzelmittel","D","Einzelmittel","G","Einzelmittel","F","Einzelmittel","B","Einzelmittel","A","Einzelmittel","H","Einzelmittel","E","Einzelmittel","C","Einzelmittel","Y","Einzelmittel","U","Einzelmittel","Z","Einzelmittel","O","Einzelmittel","P","Einzelmittel","M","Einzelmittel","R","Einzelmittel","L","Einzelmittel","N","Einzelmittel","K","Einzelmittel","X","Einzelmittel","W","Einzelmittel","T","Einzelmittel","Q","Einzelmittel","S","Einzelmittel","V","Einzelmittel","I","Einzelmittel","J"],"manufacturer":"Gräfe und Unzer Verlag GmbH","pharmaForm":"Buch","brand":"","brandIntern":"GU","subBrandIntern":"","activeSubstances":[],"additiveSubstances":[],"additiveSubstancesHtml":"","descriptionShort":"Der schnellste Weg zum richtigen Mittel","keywords":[],"unit":"St","unitQuantityString":"1","masterID":"14257122","indicationRanges":[],"ratingCount":0,"averageRating":0,"attributes":[],"prescriptionMedicine":false,"price":1499,"listPrice":1499,"netRetailPrice":1428,"priceFormatted":"€ 14,99","listPriceFormatted":"€ 14,99","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/gu-quickfinder-homoeopathie-buch-D14257122-p1.jpg","hasImage":true,"deeplink":"homoeopathie/14257122/gu-quickfinder-homoeopathie.htm","applicablePromotions":"","variantDetails":"14257122|14257122|0|1 St|1499|homoeopathie/14257122/gu-quickfinder-homoeopathie.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":0,"created":1535623518000,"lastChanged":1598486451000,"ratingsLink":"/produktbewertungen/14257122/gu-quickfinder-homoeopathie.htm","ean":"9783833865121","RPMultiplier":-1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Sets"],"topsellerCountBucket":2,"filterAttributes":[],"filterRating":5,"packSize":"1 St","variants":[{"id":"14257122","text":"Der schnellste Weg zum richtigen Mittel","webDetailPath":"homoeopathie/14257122/gu-quickfinder-homoeopathie.htm","stock":"product.stockStatus.available","active":true,"discount":"0","retailPrice":"1499","listPrice":"1499","packSize":"1 St","nowProductGroup":"sameday_nextday","attributes":[],"productName":"GU Quickfinder Homöopathie ","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/gu-quickfinder-homoeopathie-buch-D14257122-p1.jpg","pharmaForm":"Buch","ribbonText":"","RPMultiplier":"-1"}],"master":true,"marketplace":true,"nowProductGroup":"sameday_nextday","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00850","csd01573","csd00914","csd00915","csd00916","csd00917","csd00918","csd00919","csd00920","csd00921","csd00922","csd00923","csd00924","csd00925","csd00926","csd00927","csd00928","csd00929","csd00930","csd00931","csd00932","csd00933","csd00934","csd00935","csd00936","csd00937","csd00938","csd00939","csd00940","csd02764","csd02770","csd01458"],"prices":{"listPrice":{"amount":14.99,"net":14.28,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":14.99,"net":14.28,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.5,"objectID":"14257122","_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":95,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":5,"newPosition":5}}},{"brandCode":"","pzn":"04848520","productName":"Helixor® A 0,1 mg","secondaryCategories":[],"manufacturer":"HELIXOR Heilmittel GmbH","pharmaForm":"Ampullen","brand":"","brandIntern":"Helixor","subBrandIntern":"A","activeSubstances":["Tannenmistelkraut-Extrakt (1:20); Auszugsmittel: Wasser, Natriumchlorid (99,91:0,09)"],"additiveSubstances":["Wasser für Injektionszwecke","Natriumhydroxid zur pH-Wert-Einstellung","Natriumchlorid"],"additiveSubstancesHtml":"<ul><li>Wasser für Injektionszwecke</li><li>Natriumhydroxid zur pH-Wert-Einstellung</li><li>Natriumchlorid</li></ul>","descriptionShort":"Anthroposophisches Arzneimittel zur erweiterten Behandlungbei Geschwulstkrankheiten.","keywords":[],"unit":"St","unitQuantityString":"8","masterID":"04848520","indicationRanges":["Antineoplastische Mittel","Anthroposophika","Mistelpräparate"],"ratingCount":0,"averageRating":0,"attributes":["kühlpflichtig","apothekenpflichtig","homöopathisch","Arzneimittel"],"prescriptionMedicine":false,"price":7568,"listPrice":7872,"netRetailPrice":6524,"priceFormatted":"€ 75,68","listPriceFormatted":"€ 78,72","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/helixor-a-0-1-mg-ampullen-D04848520-p1.jpg","hasImage":true,"deeplink":"homoeopathie/4848520/helixor-a-0-1-mg.htm","applicablePromotions":"","variantDetails":"04848520|04848520|4|8 St|7568|homoeopathie/4848520/helixor-a-0-1-mg.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":4,"created":1533561644000,"lastChanged":1598483645000,"ratingsLink":"/produktbewertungen/4848520/helixor-a-0-1-mg.htm","ean":"","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Mistelpräparate"],"topsellerCountBucket":1,"filterAttributes":["kühlpflichtig","homöopathisch"],"filterRating":5,"packSize":"8 St","variants":[{"id":"04848520","text":"Anthroposophisches Arzneimittel zur erweiterten Behandlungbei Geschwulstkrankheiten.","webDetailPath":"homoeopathie/4848520/helixor-a-0-1-mg.htm","stock":"product.stockStatus.available","active":true,"discount":"4","retailPrice":"7568","listPrice":"7872","packSize":"8 St","nowProductGroup":"none","attributes":["kühlpflichtig","apothekenpflichtig","homöopathisch","Arzneimittel"],"productName":"Helixor® A 0,1 mg","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/helixor-a-0-1-mg-ampullen-D04848520-p1.jpg","pharmaForm":"Ampullen","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"none","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00850","csd01041"],"prices":{"listPrice":{"amount":78.72,"net":67.86,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":75.68,"net":65.24,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.5,"objectID":"04848520","_highlightResult":{"activeSubstances":[{"value":"Tannenmistelkraut-Extrakt (1:20); <ais-highlight-0000000000>A</ais-highlight-0000000000>uszugsmittel: Wasser, Natriumchlorid (99,91:0,09)","matchLevel":"full","fullyHighlighted":false,"matchedWords":["a"]}]},"_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":94,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":6,"newPosition":6}}},{"brandCode":"","pzn":"10789069","productName":"OMRON Verneblerset für A3 Complete","secondaryCategories":[],"manufacturer":"HERMES Arzneimittel GmbH","pharmaForm":"Set","brand":"","brandIntern":"OMRON","subBrandIntern":"A","activeSubstances":[],"additiveSubstances":[],"additiveSubstancesHtml":"","descriptionShort":"Erwachsenen, - Kindermaske, PVC-Luftschlauch und Ersatzfilter","keywords":[],"unit":"St","unitQuantityString":"1","masterID":"10789069","indicationRanges":[],"ratingCount":0,"averageRating":0,"attributes":[],"prescriptionMedicine":false,"price":3234,"listPrice":3682,"netRetailPrice":2788,"priceFormatted":"€ 32,34","listPriceFormatted":"€ 36,82","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/omron-verneblerset-fuer-a3-complete-set-D10789069-p1.jpg","hasImage":true,"deeplink":"arzneimittel/10789069/omron-verneblerset-fuer-a3-complete.htm","applicablePromotions":"","variantDetails":"10789069|10789069|12|1 St|3234|arzneimittel/10789069/omron-verneblerset-fuer-a3-complete.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":12,"created":1470306010000,"lastChanged":1598049191000,"ratingsLink":"/produktbewertungen/10789069/omron-verneblerset-fuer-a3-complete.htm","ean":"4015672109681","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte ","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Erkältung & Grippe","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Erkältung & Grippe/Inhalationsgeräte & Zubehör"],"topsellerCountBucket":0,"filterAttributes":[],"filterRating":5,"packSize":"1 St","variants":[{"id":"10789069","text":"Erwachsenen, - Kindermaske, PVC-Luftschlauch und Ersatzfilter","webDetailPath":"arzneimittel/10789069/omron-verneblerset-fuer-a3-complete.htm","stock":"product.stockStatus.available","active":true,"discount":"12","retailPrice":"3234","listPrice":"3682","packSize":"1 St","nowProductGroup":"none","attributes":[],"productName":"OMRON Verneblerset für A3 Complete","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/omron-verneblerset-fuer-a3-complete-set-D10789069-p1.jpg","pharmaForm":"Set","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"none","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00001","csd00061","csd00069"],"prices":{"listPrice":{"amount":36.82,"net":31.74,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":32.34,"net":27.88,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.5,"objectID":"10789069","_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":93,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":7,"newPosition":7}}},{"brandCode":"","pzn":"10789046","productName":"OMRON A3 Complete Inhalationsgerät","secondaryCategories":["Allergie & Asthma","Asthma"],"manufacturer":"HERMES Arzneimittel GmbH","pharmaForm":"Inhalat","brand":"","brandIntern":"OMRON","subBrandIntern":"A","activeSubstances":[],"additiveSubstances":[],"additiveSubstancesHtml":"","descriptionShort":"Schnelle Befreiung der oberen, mittleren und unteren Atemwege","keywords":[],"unit":"St","unitQuantityString":"1","masterID":"10789046","indicationRanges":[],"ratingCount":0,"averageRating":0,"attributes":[],"prescriptionMedicine":false,"price":10620,"listPrice":11693,"netRetailPrice":9155,"priceFormatted":"€ 106,20","listPriceFormatted":"€ 116,93","potency":"","ifap":"","image":"https://cdn.shop-apotheke.com/images/omron-a3-complete-inhalationsgeraet-inhalat-D10789046-p1.jpg","hasImage":true,"deeplink":"arzneimittel/10789046/omron-a3-complete-inhalationsgeraet.htm","applicablePromotions":"","variantDetails":"10789046|10789046|9|1 St|10620|arzneimittel/10789046/omron-a3-complete-inhalationsgeraet.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"","discountInPercent":9,"created":1445170849000,"lastChanged":1598049191000,"ratingsLink":"/produktbewertungen/10789046/omron-a3-complete-inhalationsgeraet.htm","ean":"4015672109568","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte ","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Erkältung & Grippe","Die Online-Apotheke für Deutschland/Arzneimittel & weitere Produkte /Erkältung & Grippe/Inhalationsgeräte & Zubehör"],"topsellerCountBucket":0,"filterAttributes":[],"filterRating":5,"packSize":"1 St","variants":[{"id":"10789046","text":"Schnelle Befreiung der oberen, mittleren und unteren Atemwege","webDetailPath":"arzneimittel/10789046/omron-a3-complete-inhalationsgeraet.htm","stock":"product.stockStatus.available","active":true,"discount":"9","retailPrice":"10620","listPrice":"11693","packSize":"1 St","nowProductGroup":"none","attributes":[],"productName":"OMRON A3 Complete Inhalationsgerät","pricePerUnit":"","imageUrl":"https://cdn.shop-apotheke.com/images/omron-a3-complete-inhalationsgeraet-inhalat-D10789046-p1.jpg","pharmaForm":"Inhalat","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"none","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00001","csd00061","csd00069","csd00010","csd00016"],"prices":{"listPrice":{"amount":116.93,"net":100.8,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":106.2,"net":91.55,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.5,"objectID":"10789046","_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":92,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":8,"newPosition":8}}},{"brandCode":"csd03864","pzn":"02591471","productName":"Aurum Metallicum Praeparatum D30","secondaryCategories":["Einzelmittel","A","Beruhigung, Schlaf & Nerven","Homöopathische Produkte","Homöopathische Produkte","Herz & Kreislauf","Homöopathisch","Herz & Kreislauf"],"manufacturer":"WELEDA AG","pharmaForm":"Trituration","brand":"WELEDA Aurum","brandIntern":"WELEDA","subBrandIntern":"Aurum metallicum","activeSubstances":["Aurum metallicum praeparatum in homöopathischer Verdünnung"],"additiveSubstances":["Lactose"],"additiveSubstancesHtml":"<ul><li>Lactose</li></ul>","descriptionShort":"Arthropophisches Arzneimittel bei Kreislaufregulationsstörungen","keywords":[],"unit":"g","unitQuantityString":"20","masterID":"02591471","indicationRanges":["Herzwirksame Pharmaka","Anthroposophika","Hypnotika/ Sedativa","Anthroposophika"],"ratingCount":1,"averageRating":0,"attributes":["apothekenpflichtig","homöopathisch","Arzneimittel"],"prescriptionMedicine":false,"price":1773,"listPrice":2279,"netRetailPrice":1528,"priceFormatted":"€ 17,73","listPriceFormatted":"€ 22,79","potency":"D30","ifap":"","image":"https://cdn.shop-apotheke.com/images/aurum-metallicum-praeparatum-d30-trituration-D02591471-p10.jpg","hasImage":true,"deeplink":"homoeopathie/2591471/aurum-metallicum-praeparatum-d30.htm","applicablePromotions":"","variantDetails":"02591471|02591471|22|20 g|1773|homoeopathie/2591471/aurum-metallicum-praeparatum-d30.htm|product.stockStatus.available","stockStatus":"","stockStatusReason":"product.stockStatus.available","inStock":true,"pricePerUnit":"88,65 € / 100 g","discountInPercent":22,"created":1481110892000,"lastChanged":1598511307000,"ratingsLink":"/produktbewertungen/2591471/aurum-metallicum-praeparatum-d30.htm","ean":"4001638035675","RPMultiplier":1,"ribbonText":"","primaryCategory":["Die Online-Apotheke für Deutschland","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch","Die Online-Apotheke für Deutschland/Homöopathie & Naturprodukte/Anwendungsgebiete/Homöopathisch/Beruhigung, Schlaf & Nerven"],"topsellerCountBucket":0,"filterAttributes":["homöopathisch"],"filterRating":5,"packSize":"20 g","variants":[{"id":"02591471","text":"Arthropophisches Arzneimittel bei Kreislaufregulationsstörungen","webDetailPath":"homoeopathie/2591471/aurum-metallicum-praeparatum-d30.htm","stock":"product.stockStatus.available","active":true,"discount":"22","retailPrice":"1773","listPrice":"2279","packSize":"20 g","nowProductGroup":"none","attributes":["apothekenpflichtig","homöopathisch","Arzneimittel"],"productName":"Aurum Metallicum Praeparatum D30","pricePerUnit":"88,65 € / 100 g","imageUrl":"https://cdn.shop-apotheke.com/images/aurum-metallicum-praeparatum-d30-trituration-D02591471-p10.jpg","pharmaForm":"Trituration","ribbonText":"","RPMultiplier":"1"}],"master":true,"marketplace":false,"nowProductGroup":"none","notOnStockMessage":"","stockStatusColor":"green","categoryCodes":["csd00850","csd00851","csd00852","csd00856","csd00865","csd00914","csd00915","csd00001","csd00034","csd01074","csd00175","csd01091","csd01094"],"prices":{"listPrice":{"amount":22.79,"net":19.65,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}},"retailPrice":{"amount":17.73,"net":15.28,"currency":"EUR","info":{"index":1,"text":"AVP / UVP"}}},"calculatedRatingRanking":2.45,"objectID":"02591471","_highlightResult":{"activeSubstances":[{"value":"<ais-highlight-0000000000>A</ais-highlight-0000000000>urum metallicum praeparatum in homöopathischer Verdünnung","matchLevel":"full","fullyHighlighted":false,"matchedWords":["a"]}]},"_rankingInfo":{"nbTypos":0,"firstMatchedWord":0,"proximityDistance":0,"userScore":91,"geoDistance":0,"geoPrecision":1,"nbExactWords":1,"words":1,"filters":1,"personalization":{"score":0,"rankingScore":0,"filtersScore":0,"textualRelevanceBucket":0,"initialPosition":9,"newPosition":9}}}]

type IScrapeProduct = typeof scrapedDataSample[0]

export type ICategory = {name?: string, categoryType?: ICategoryType, children?: ICategory[]}

export const prepareCategories = async (data: typeof scrapedDataSample) => {
    const categoryData = {
        secondaryCategories: prepareSecondaryCategories(data),
        primaryCategories: preparePrimaryCategories(data)
    }
    await categoryRepository.createFromScrapedData(categoryData.primaryCategories[0])
    for (let categoryName of categoryData.secondaryCategories) {
        await categoryRepository.create({name: categoryName, categoryType: 'SECONDARY'})
    }
}

const prepareSecondaryCategories = (data: typeof scrapedDataSample): string[] => {
    let secondaryCategoryMap: any = {}
    data.forEach((it)=>{
        it.secondaryCategories.forEach((it)=>secondaryCategoryMap[it] = true)
    })
    return Object.keys(secondaryCategoryMap)
}

const preparePrimaryCategories = (data: typeof scrapedDataSample): ICategory[] => {
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

export const createProductFromScrapedData = async (productData: IScrapeProduct) => {
    let product = new ProductFromExistingDataDto()
    product.descriptionShort = productData.descriptionShort
    product.pharmaForm = productData.pharmaForm
    product.prescriptionMedicine = productData.prescriptionMedicine ?? false
    product.packSize = productData.packSize
    product.productName = productData.productName
    product.isBaseProduct = true
    product.uid = productData.masterID
    product.baseProductUid = product.uid
    product.pharmaForm = productData.pharmaForm
    product.tags = await prepareTags(productData) as Tag[]
    let image = await createProductImageMedia(productData.image)
    product.images = [image as unknown as Media]
    product.prices = preparePrices(productData.prices) as Price[]
    product.primaryCategories = []

    productData.primaryCategory.forEach((it)=>{
        it.split('/').forEach((name)=>{
            if (product.primaryCategories!.indexOf(name) === -1) {
                product.primaryCategories!.push(name)
            }
        })
    })

    product.secondaryCategories = []
    productData.secondaryCategories.forEach((it)=>{
        if (product.secondaryCategories!.indexOf(it) === -1) {
            product.secondaryCategories!.push(it)
        }
    })

    let persistedProduct = await persistProduct(product)
}

export const persistProduct = async (product: ProductFromExistingDataDto) => {
    let tagsToConnect = product.tags!.filter(it=>!!it.id).map((it)=>{return {id: it.id}})
    let imagesToConnect = product.images?.filter(it=>!!it.id).map(it=>{return {id: it.id}})
    let pricesToCreate = product.prices?.map(it=>{
        return {value: it.value, priceType: it.priceType, currency: it.currency}}
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
                connect: existingCategories?.map(it=>{return {id: it.id}})
            }
        }
    })
}

export const prepareTags = async (productData: IScrapeProduct) => {
    let activeSubstances = await findOrCreateTagsByValue(productData.activeSubstances, 'ACTIVE_SUBSTANCE')
    let additiveSubstances = await findOrCreateTagsByValue(productData.additiveSubstances, 'ADDITIVE_SUBSTANCE')
    let attributes = await findOrCreateTagsByValue(productData.attributes, 'ATTRIBUTE')
    let brand = await findOrCreateTagsByValue([productData.brand], 'BRAND')
    let manufacturer = await findOrCreateTagsByValue([productData.manufacturer], 'MANUFACTURER')
    return [
        ...activeSubstances,
        ...additiveSubstances,
        ...attributes,
        ...brand,
        ...manufacturer
    ]
}


const findOrCreateTagsByValue = async (tags: string[] = [], tagType: TagTypes) => {
    let nonEmptyTags = tags.filter(it=>!!it)
    const existing = await App.prisma.tag.findMany({
        where: {
            tagType: tagType,
            value: {
                in: nonEmptyTags
            }
        }
    })
    let existingTagValues = existing.map((it)=>it.value)
        .filter(it=>!!it)
    let notExisting = nonEmptyTags.filter((it)=>{
        return !existingTagValues.includes(it)
    })
    for (let toCreate of notExisting) {
        existing.push(await createTag(toCreate, tagType))
    }
    return existing
}

const createTag = async (value: string, tagType: TagTypes) => {
    return await App.prisma.tag.create({
        data: {
            tagType,
            value
        }
    })
}

const createProductImageMedia = async (imageLink?: string) => {
    if (!imageLink) {
        return null
    }
    return await App.prisma.media.create({
        data: {
            driver: 'DIRECT_LINK',
            mediaType: 'IMAGE',
            path: imageLink
        }
    })
}

export const preparePrices = (prices: IScrapeProduct['prices']) => {
    let listPrice = prices.listPrice
    let retailPrice = prices.retailPrice
    const result = []
    listPrice && result.push({priceType: 'LIST', value: (listPrice.net ?? 0) * 100, currency: listPrice.currency})
    retailPrice && result.push({priceType: 'RETAIL', value: (retailPrice.net) * 100, currency: retailPrice.currency})
    return result
}

export const createPrice = async (price: IScrapeProduct['prices']['retailPrice'], productId: number, priceType: 'LIST' | 'RETAIL') => {
    let data = {
        productId,
        value: price.net,
        currency: price.currency,
        priceType
    }
    return await App.prisma.price.create({
        data
    })
}

class ProductFromExistingDataDto {
    activeSubstances?: Tag[]
    additiveSubstances?: Tag[]
    baseProductUidGroup?: string
    attributes?: Tag[]
    averageRating?: number
    brand?: Tag[]
    created?: string
    descriptionShort?: string
    manufacturer?: Tag[]
    productName?: string
    images?: Media[]
    pharmaForm?: string
    prescriptionMedicine?: boolean
    packSize?: string
    uid?: string
    isBaseProduct?: boolean
    baseProductUid?: string
    tags?: Tag[]
    prices?: Price[]
    primaryCategories?: string[]
    secondaryCategories?: string[]
}


interface Media {
    id?: number
    path: string | null,
    driver?: 'DIRECT_LINK'
}

type TagTypes = 'ACTIVE_SUBSTANCE' | 'ADDITIVE_SUBSTANCE' | 'ATTRIBUTE' | 'INDICATION_RANGE' | 'KEYWORD' |
                'PRIMARY_CATEGORY' | 'SECONDARY_CATEGORY' | 'BRAND' | 'MANUFACTURER'

interface Tag {
    id?: number
    tagType?: string | TagTypes
    value: string
}

interface Price {
    priceType?: 'LIST_PRICE' | 'RETAIL_PRICE'
    currency: 'EUR' | 'USD',
    value: number
}