import React from "react"
import { Container } from "reactstrap"
import { TopMenu } from "./menu/TopMenu"
import { Switch, Route } from "react-router"
import { UserNew } from "./user/UserNew"
import {LoginForm} from "./session/LoginForm"
import {UserRoleOrganizerDashboard} from "./user/UserRoleOrganiserDashboard"
import {AboutDemo} from "./pages/AboutDemo"
import {ProductNew} from "./product/ProductNew";
import {ProductGlobalSearch} from "./product/ProductGlobalSearch";
import {ProductDetailShow} from "./product/ProductDetailShow";

const Main = () => {

    return <Container fluid>
        <TopMenu/>
        <Container fluid>
            <Switch>
                <Route exact path={'/'}>
                    <ProductGlobalSearch/>
                </Route>
                <Route exact path={`/aboutDemo`}>
                    <AboutDemo/>
                </Route>
                <Route exact path={'/user/new'}>
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
                <Route exact path={`/product/:productId`} render={(props)=>{
                    const productId = props.match.params.productId
                    return <ProductDetailShow productId={productId}/>
                }}/>
            </Switch>
        </Container>
    </Container>

}

export {Main}