import { useState, Fragment } from "react";

const Register = () => {
    const [name, setName,] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        console.table({ name, email, password })
    }

    const registerForm = () => (
        <form onSubmit={handleSubmit} className="mt-3">

            <div className="form-group mb-3">
                <label className="form-label">Type your name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group mb-3">
                <label className="form-label">Type your email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group mb-3">
                <label className="form-label">Type your password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="btn btn-primary">Submit</button>

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