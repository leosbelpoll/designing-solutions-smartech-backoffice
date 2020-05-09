import React from "react";
import { Route, Switch } from "react-router-dom";

import URLMapping from "utils/routes";
import ProjectLogin from "components/business/Project/ProjectLogin";
import NotFound from "components/ui/pages/NotFound";

export default function ExternalRoutes() {
    return (
        <Switch>
            <Route exact path={URLMapping.LOGIN} component={ProjectLogin} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
