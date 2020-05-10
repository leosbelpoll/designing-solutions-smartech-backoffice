import { useHistory } from "react-router-dom";

import apiCall from "utils/api";
import URLMapping from "utils/routes";

export default function useAuth() {
    const history = useHistory();

    const login = async (email, password, rememberMe) => {
        try {
            const res = await apiCall("/auth/login", "POST", {
                email,
                password
                // rememberMe
            });
            const jwt = res["access_token"];
            localStorage.setItem("SMARTECH_JWT", jwt);
            history.push(URLMapping.LOGIN);
        } catch (err) {
            throw err;
        }
    };

    const isLogged = () => {
        const jwt = getJwt();
        return jwt && jwt.length > 0;
    };

    const getJwt = () => {
        return localStorage.getItem("SMARTECH_JWT");
    };

    const logout = () => {
        localStorage.removeItem("SMARTECH_JWT");
        history.push(URLMapping.LOGIN);
    };

    return {
        isLogged,
        login,
        logout,
        getJwt
    };
}
