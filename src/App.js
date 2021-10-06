import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Subscribers from "./pages/Subscribers/Subscribers";
import Campaigns from "./pages/Campaigns/Campaigns";

import 'normalize.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Campaigns />
                </Route>
                <Route exact path="/subscribers">
                    <Subscribers />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
