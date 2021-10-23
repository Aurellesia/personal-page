import ClassNews from "components/ClassNews";
import FunctionNews from "components/FunctionNews";
import Home from "pages/Home";
import PersonalWeb from "pages/PersonalWeb";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/classNews" component={ClassNews} />
      <Route path="/personalWebsite" component={PersonalWeb} />
      <Route path="/functionNews" component={FunctionNews} />
    </Switch>
  </Router>
);
