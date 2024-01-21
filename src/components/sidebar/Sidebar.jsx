import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mask, settings, productIcon, profile } from "../../assets/images";
import "./Sidebar.scss";
import NoProducts from "../../pages/noProducts/NoProducts";

const Sidebar = ({ products }) => {
	const [bar, setBar] = useState(false);

	const handleBar = () => {
		setBar(!bar);
		console.log(bar);
	};

	return (
		<React.Fragment>
			<div className="d-flex">
				<aside>
					{bar ? (
						<div className="sidebar-opened">
							<ul>
								<li>
									<button onClick={handleBar} className="btn btn-close btn-close-white" />
								</li>
								<li>
									<Link to="/settings">
										<img src={settings} alt="" />
										<span>Settings</span>
									</Link>
								</li>

								<li>
									<Link to="/profile">
										<img src={profile} alt="" />
										<span>Profile</span>
									</Link>
								</li>
								<li>
									<Link to="/products">
										<img src={productIcon} alt="" />
										<span>Products</span>
									</Link>
								</li>
							</ul>
						</div>
					) : (
						<div className="sidebar-default">
							<ul>
								<li>
									<img onClick={handleBar} src={mask} alt="" />
								</li>
								<li>
									<Link to="/settings">
										<img src={settings} alt="" />
									</Link>
								</li>
								<li>
									<Link to="/profile">
										<img src={profile} alt="" />
									</Link>
								</li>
								<li>
									<Link to="/products">
										<img src={productIcon} alt="" />
									</Link>
								</li>
							</ul>
						</div>
					)}
				</aside>
			</div>

			{/* <button className='btn btn-danger' onClick={handleBar}>Sidebar</button> */}
		</React.Fragment>
	);
};

export default Sidebar;
