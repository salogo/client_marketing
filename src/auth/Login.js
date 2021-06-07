import { useState } from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LonginForm from "../components/LoginForm";

const Longin = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    return (
        <Fragment>

        <div className="container-fluid bg-info p-5 text-center">
           <h1>Login</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <LonginForm
              handleSubmit={handleSubmit} 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              />
            </div>
          </div>
        </div>

    </Fragment>
    );
};
export default Longin;