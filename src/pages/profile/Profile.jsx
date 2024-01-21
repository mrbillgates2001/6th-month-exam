import React from "react";
import { profile } from "../../assets/images";
import { Link, Navigate } from "react-router-dom";

const Profile = ({ user }) => {


	const handleLogout = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("username");
		<Navigate to='/login' replace/>
	};
	return (
		<React.Fragment>
			<div className="profile">
				<div className="container">
					<div className="image d-flex align-items-center gap-2">
						<img src={profile} alt="" width={54} height={54} />
						<span>{user}</span>
					</div>

					<div className="d-f mt-3">
						<h3>Nice to see you here 👋</h3>
					</div>

					<div className="d-flex mt-lg-5">
						<Link to='/login' onClick={handleLogout} className="btn btn-outline-warning">Logout</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Profile;
