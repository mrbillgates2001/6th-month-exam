import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const Navigate = useNavigate();

	const handleUsernameChange = (event) => {
		event.preventDefault();
		setUsername(event.target.value);
	};
	const handleNameChange = (event) => {
		event.preventDefault();
		setName(event.target.value);
	};

	const handleLogin = () => {
		// event.preventDefault()
		localStorage.setItem("name", JSON.stringify(name).toLowerCase());
		localStorage.setItem("username", JSON.stringify(username).toLowerCase());
		// <Navigate to="/products" />;
		Navigate("/products");
	};

	// useEffect(() => {
	// 	handleLogin()
	// }, [])

	return (
		<React.Fragment>
			<div className="d-flex align-items-center justify-content-center mx-auto">
				<form
					className="row g-3 needs-validation d-flex flex-column align-items-center justify-content-center w-100 mx-auto"
					noValidate>
					<div className="col-md-4 w-100 mx-auto">
						<label htmlFor="validationCustom01" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control w-100"
							id="validationCustom01"
							value={name}
							onChange={handleNameChange}
							required
						/>
						<div className="valid-feedback">Looks good!</div>
					</div>
					<div className="col-md-4 w-100 mx-auto">
						<label htmlFor="validationCustomUsername" className="form-label">
							Username
						</label>
						<div className="input-group has-validation">
							<span className="input-group-text" id="inputGroupPrepend">
								@
							</span>
							<input
								type="text"
								className="form-control"
								id="validationCustomUsername"
								aria-describedby="inputGroupPrepend"
								value={username}
								onChange={handleUsernameChange}
								required
							/>
							<div className="invalid-feedback">Please choose a username.</div>
						</div>
					</div>
					<div className="col-12">
						<button
							onClick={handleLogin}
							className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
							type="submit">
							Submit form
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default Login;
