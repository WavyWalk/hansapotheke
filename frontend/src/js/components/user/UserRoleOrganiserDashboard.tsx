import React from "react"
import {Container, Nav, NavItem, Row} from "reactstrap"
import {Route, Switch, useRouteMatch} from "react-router"
import {NavLink} from "react-router-dom"


const UserRoleOrganizerDashboard: React.FC = () => {

    const match = useRouteMatch()

    return <Container>
        <Switch>
            <Route exact path={`${match.path}/events`}>

            </Route>
            <Route exact path={`${match.path}/events/new`}>

            </Route>
        </Switch>
    </Container>
}

export {UserRoleOrganizerDashboard}