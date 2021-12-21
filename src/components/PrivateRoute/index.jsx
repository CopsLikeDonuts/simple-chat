import routeNames from "../../routeNames";
import {Redirect, Route} from "react-router-dom";

export default function PrivateRoute({component, isLogged, path}) {
    if (!isLogged) {
        return (
            <Route exact path={path}>
                <Redirect to={routeNames.home} />
            </Route>
        )
    }

    return <Route exact path={path}>{component}</Route>
}
