import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./booking/Home";
import Longin from "./auth/Login";
import Register from "./auth/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Longin} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
