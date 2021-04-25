import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./booking/Home";
import Longin from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Longin} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
