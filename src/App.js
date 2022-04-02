import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FormScreen from "./screens/form";
import ProfileScreen from "./screens/profile";
import { Provider } from 'react-redux'
import {store} from "./store";

export default function App() {
    return (
        <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Form</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/profile">
                        <ProfileScreen />
                    </Route>
                    <Route path="/">
                        <FormScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
        </Provider>
    );
}
