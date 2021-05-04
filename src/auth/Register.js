import { useState, Fragment } from "react";

const Register = () => {
    const [ name, setName, ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = () => (
        alert("submited...")
    )

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
           Register Form <button type="submit">Submit</button>
        </form>
    )

    return (
        <Fragment>
            <div className="container-fluid bg-info p-5 text-center">
               <h1>Register</h1>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                   {registerForm()}
                </div>
              </div>
            </div>


        </Fragment>
    )
}
export default Register;