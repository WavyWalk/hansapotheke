import {SubscriptionState} from "../libs/statemanagement/SubscriptionState";
import {algoliaConfigData} from "../algolia/algoliaConfig"
import {getUnixTime, startOfDay, endOfDay} from "date-fns"

export class GlobalSearchState extends SubscriptionState {

    static instance = new GlobalSearchState()

    searchState: any = {}

    onSearchStateChange = (newState: any) => {
        this.searchState = newState
        this.update()
    }

    refinePrice = (min: any, max: any) => {
        this.searchState = this.searchState ?? {}
        this.searchState.range = this.searchState.range ?? {}
        this.searchState.range.retailPrice = {
            min, max
        }
        this.update()
    }

    cleanup = () => {
        this.searchState = {}
    }

}