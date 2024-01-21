import React from "react";
import { Link, Navigate } from "react-router-dom";
import { logout, profile } from "../../assets/images";
import "./Header.scss";

const Header = ({ user }) => {
	const handleLogout = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("username");
		<Navigate to="/login" replace />;
	};
	return (
		<React.Fragment>
			<header className="w-96">
				<nav>
					<div className="nav-items">
						<h1>Products</h1>
						<div className="navigation">
							<Link>Main</Link> / <Link>Products</Link>
						</div>
					</div>

					<div className="login">
						{user ? (
							<Link to="/profile" className="d-flex align-items-center gap-2">
								<img src={profile} alt="" width={40} height={40} />
								<span>{user}</span>
							</Link>
						) : (
							<Link to="/login" onClick={handleLogout} className="btn border">
								<img src={logout} alt="" />
								<span>Log out</span>
							</Link>
						)}
					</div>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
