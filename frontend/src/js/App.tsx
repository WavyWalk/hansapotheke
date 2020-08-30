import * as React from 'react'
import ReactDom from 'react-dom'
import { Router } from 'react-router-dom'
import { RouterNavigationUtils } from './utils/routing/RouterNavigationUtils'
import { Main } from './components/Main'
import {CurrentUserState} from "./states/CurrentUserState"
import {LocalStorageManager} from "./utils/LocalStorageManager"
import {ModelRegistrator} from "./models/ModelRegistrator"
import 'rheostat/initialize';
import {XhrRequestMaker} from "./libs/frontmodel/src";


export class App {

    static init() {
        ModelRegistrator.run()
        LocalStorageManager.init()
        XhrRequestMaker.onFailHandler = (xhr) => {
            let status = xhr.status
        }
        CurrentUserState.instance.logInUserFromAppData()
        document.addEventListener('DOMContentLoaded', ()=>{
            this.mount()
        })
    }

    static mount() {
        const mountElement = document.querySelector('#app')
        ReactDom.render(
            <Router history={RouterNavigationUtils.history}>
                <Main/>
            </Router>,
            mountElement
        )
    }
 
}