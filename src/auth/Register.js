import { useState, Fragment } from "react";
import RegisterForm from "../components/RegisterForm";
//import axios from "axios";
import { toast } from 'react-toastify';
import { register } from "../actions/auth";


const Register = ({ history }) => {
    const [name, setName,] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res  =  await register({name, email, password })
        console.log("RGISTER USER ===>", res)
        toast.success("Register success. you can login now");
        history.push("/login"); // to redirect to log in page using history

        } catch (err) {
            console.log("ERR",err);
        if (err.response.status === 400) toast.error(err.response.data);
        }
    };

    return (
        <Fragment>
            <div className="container-fluid bg-info p-5 text-center">
                <h1>Register</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm  
                        name={name} 
                        setName={setName} 
                        email={email} 
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit} 
                        />
                    </div>
                </div>
            </div>


        </Fragment>
    )
}
export default Register;