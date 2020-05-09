import React from "react";

import useLogged from "components/hooks/useLogged";
import InternalRoutes from "./InternalRoutes";
import ExternalRoutes from "./ExternalRoutes";

export default function Routes() {
    const logged = useLogged();

    if (logged !== undefined){
        return logged ? <InternalRoutes /> : <ExternalRoutes />;
    } else {
        return null;
    }
}
