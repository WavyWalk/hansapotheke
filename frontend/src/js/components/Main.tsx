import React from "react"
import { Container } from "reactstrap"
import { TopMenu } from "./menu/TopMenu"
import { Switch, Route } from "react-router"
import { UserNew } from "./user/UserNew"
import {LoginForm} from "./session/LoginForm"
import {UserRoleOrganizerDashboard} from "./user/UserRoleOrganiserDashboard"
import {AboutDemo} from "./pages/AboutDemo"
import {ProductNew} from "./product/ProductNew";

const Main = () => {

    return <Container fluid>
        <TopMenu/>
        <Container fluid>
            <Switch>
                <Route exact path={'/'}>

                </Route>
                <Route exact path={`/aboutDemo`}>
                    <AboutDemo/>
                </Route>
                <Route exact path={'/user/registerOrganizer'}>
                    <UserNew
                        open={true}
                    />
                </Route>
                <Route exact path={`/product/new`}>
                    <ProductNew/>
                </Route>
                <Route exact path={'/login'}>
                    <LoginForm/>
                </Route>
                <Route path={`/user/roleOrganiser/dashboard`}>
                    <UserRoleOrganizerDashboard/>
                </Route>
                <Route exact path={`/event/search`}>

                </Route>
                <Route exact path={`/event/:eventId`} render={(props)=>{
                    return <div>

                    </div>
                }}/>
            </Switch>
        </Container>
    </Container>

}

export {Main}