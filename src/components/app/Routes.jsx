import React from "react";

import useAuth from "components/hooks/useAuth";
import InternalRoutes from "./InternalRoutes";
import ExternalRoutes from "./ExternalRoutes";

export default function Routes() {
    const { isLogged } = useAuth();
    const logged = isLogged();
    
    if (logged !== undefined){
        return logged ? <InternalRoutes /> : <ExternalRoutes />;
    } else {
        return null;
    }
}
