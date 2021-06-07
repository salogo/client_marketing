const LoginForm = ({
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword
}) => (
    <form onSubmit={handleSubmit} className="mt-3">

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

    <button disabled={!email || !password} className="btn btn-primary">
       Submit
    </button>

</form>
)
export default LoginForm;