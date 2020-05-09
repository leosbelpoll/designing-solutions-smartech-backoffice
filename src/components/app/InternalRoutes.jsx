import React from "react";
import { Route, Switch } from "react-router-dom";

import URLMapping from "utils/routes";
import Home from "components/ui/pages/Home";
import NotFound from "components/ui/pages/NotFound";
import Header from "components/ui/parts/Header";

// Projects
import ProjectList from "components/business/Project/ProjectList";
import ProjectDetail from "components/business/Project/ProjectDetail";

// Forms
import FormList from "components/business/Form/FormList";
import FormDetail from "components/business/Form/FormDetail";

// Standards
import StandardList from "components/business/Standard/StandardList";
import StandardDetail from "components/business/Standard/StandardDetail";
import ProjectForm from "components/business/Project/ProjectForm";

export default function InternalRoutes() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    {/* Front */}
                    <Route exact path={URLMapping.HOME} component={Home} />

                    {/* Projects */}
                    <Route exact path={URLMapping.PROJECTS} component={ProjectList} />
                    <Route exact path={URLMapping.PROJECT_DETAIL} component={ProjectDetail} />
                    <Route exact path={URLMapping.CREATE_PROJECT} component={ProjectForm} />

                    {/* Forms */}
                    <Route exact path={URLMapping.FORMS} component={FormList} />
                    <Route exact path={URLMapping.FORM_DETAIL} component={FormDetail} />

                    {/* Standards */}
                    <Route exact path={URLMapping.STANDARDS} component={StandardList} />
                    <Route exact path={URLMapping.STANDARD_DETAIL} component={StandardDetail} />

                    {/* NotFound */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </>
    );
}
