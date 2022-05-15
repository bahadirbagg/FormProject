import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import FormDetail from "./FormDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/forms/:formName" exact component={FormDetail} />
      </Switch>
    </Router>
  );
}

export default App;
