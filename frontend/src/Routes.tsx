import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"
import { SingleModule } from "./pages/SingleModule"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/module/:id" render={props => <SingleModule {...props}/>}/>
            </Switch>
        </BrowserRouter>
    )
}