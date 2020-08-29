import {SubscriptionState} from "../libs/statemanagement/SubscriptionState";
import {User} from "../models/User"
import {LocalStorageManager} from "../utils/LocalStorageManager";
import {RouterNavigationUtils} from "../utils/routing/RouterNavigationUtils"

export class CurrentUserState extends SubscriptionState {

    static instance = new CurrentUserState()

    userInstance?: User | null

    constructor() {
        super();
        this.setDefaults()
    }

    setDefaults() {
        this.userInstance = null
    }

    isOrganiser() {
        if (!this.isLoggedIn()) {
            return false
        }
        return !!this.userInstance?.roles?.array?.find(it=>it.name === 'ORGANIZER')
    }

    isLoggedIn() {
        return !!this.userInstance
    }

    logInUserFromAppData() {
        const userData = LocalStorageManager.appData.loggedInUser
        if (userData) {
            CurrentUserState.instance.logUserIn(new User(userData))
        }
    }

    logUserIn(user: User) {
        this.setUserInstance(user)
        this.flushCurrentUserDataToLocalStorage()
        return
    }

    setUserInstance(userInstance: User) {
        this.userInstance = userInstance
        this.update()
    }

    async logout() {
        if (this.isLoggedIn()) {
            await this.userInstance?.logout()
        }
        this.setDefaults()
        LocalStorageManager.appData.loggedInUser = undefined
        LocalStorageManager.flushAppData()
        RouterNavigationUtils.pushToHome()
        this.update()
    }

    flushCurrentUserDataToLocalStorage() {
        console.log(this.userInstance)
        LocalStorageManager.appData.loggedInUser = this.userInstance?.serialize() ?? undefined
        LocalStorageManager.flushAppData()
    }

}
