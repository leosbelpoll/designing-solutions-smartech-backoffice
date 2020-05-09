import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import URLMapping from "utils/routes";
import Login from "components/app/Login";
import NotFound from "components/ui/pages/NotFound";

export default function ExternalRoutes() {
    return (
        <Switch>
            <Route exact path={URLMapping.LOGIN} component={Login} />
            <Route path="*" render={() => <Redirect to={URLMapping.LOGIN}/>} />
        </Switch>
    );
}
