import { useState } from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LonginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";

const Longin = ({ history }) => {

    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Send login data", { email , password });
        try {
            let res = await login({ email, password })
            
            if (res.data) {
                console.log(
                    "Save user res in Redux && local storage then redirect ===>"
                    );
               // console.log(res.data); 
               window.localStorage.setItem("auth", JSON.stringify(res.data));
               // save user and token to redux
               dispatch({
                   type: "LOGGED_IN_USER",
                   payload: res.data,
               }); 
             history.push("/");// using history prop from react router to redirect to Home page
            }
        } catch (err) {
            console.log(err)
            if (err.response.status === 400) toast.error(err.response.data);
        }
    };

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