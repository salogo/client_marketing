import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./booking/Home";
import Longin from "./auth/Login";
import Register from "./auth/Register";



function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Longin} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
