import React, { useEffect, useState } from "react";
import Login from "../../pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewProducts from "../../pages/newProducts/NewProducts";
import NoProducts from "../../pages/noProducts/NoProducts";
import Products from "../../pages/products/Products";
import Profile from "../../pages/profile/profile";
import Settings from "../../pages/settings/Settings";
import NoPage from "../../pages/nopage/NoPage";
import axios from "axios";

import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const Main = () => {
	const [user, setUser] = useState("");
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("name"));
		if (userData) {
			setUser(userData);
		}
	}, []);

	const fetchProducts = async () => {
		try {
			const res = await axios.get("http://localhost:3000/products");
			const data = await res.data;
			console.log(data);
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<React.Fragment>
			<Router>
				<div className="d-flex gap-lg-4">
					<div>
						<Sidebar />
					</div>
					<div>
						{user ? <Header user={user} /> : ""}
						<Routes>
							<Route path="settings" element={<Settings />} />
							<Route
								path="products"
								element={
									<Products
										products={products}
										user={user}
										fetchProducts={fetchProducts}
									/>
								}
							/>
							<Route path="/" user={user} element={<Login />} />
							<Route path="login" element={<Login />} />
							<Route
								path="new-products"
								element={
									<NewProducts
										setProducts={setProducts}
										fetchProducts={fetchProducts}
									/>
								}
							/>
							<Route path="no-products" element={<NoProducts />} />
							<Route path="profile" element={<Profile user={user} />} />
							<Route path="*" element={<NoPage />} />
						</Routes>
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
};

export default Main;
