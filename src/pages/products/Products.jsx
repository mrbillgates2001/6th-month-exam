import React, { useEffect, useState } from "react";
import "./Products.scss";
import { checkbox, deletecart, edit, search } from "../../assets/images";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = ({ products, fetchProducts }) => {
	const [searching, setSearching] = useState("");
	const [selecttion, setSelection] = useState("");
	const handleDelete = async (id) => {
		if (confirm("Are you sure?"))
		try {
			const res = await axios.delete(`http://localhost:3000/products/${id}
			`);
			console.log(id);
			fetchProducts();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<React.Fragment>
			{products ? (
				<div>
					<div className="container ">
						<div className="heading d-flex align-content-center justify-content-between my-3">
							<h1>Products</h1>
							<select
								className="form-select form-select-sm w-25"
								name="category"
								onChange={(e) => setSelection(e.target.value)}
								id="category">
								<option value="">Category</option>
								<option value="smartphones">smartphones</option>
								<option value="laptops">laptops</option>
								<option value="fragrances">fragrances</option>
								<option value="skincare">skincare</option>
							</select>
							<InputGroup className="mb-3 w-25">
								<InputGroup.Text id="basic-addon1">
									<img src={search} alt="" />
								</InputGroup.Text>
								<Form.Control
									type="search"
									onChange={(e) => setSearching(e.target.value)}
									placeholder="Search"
									aria-label="Search"
									aria-describedby="basic-addon1"
								/>
							</InputGroup>
						</div>
						<hr />
						<table>
							<tr>
								<th>
									<img src={checkbox} alt="" />
								</th>
								<th>Name</th>
								<th>Brand</th>
								<th>Price</th>
								<th>Category</th>
								<th>Description</th>
								<th>Action</th>
							</tr>

							{products
								.filter((product) => {
									if (searching === "" && selecttion === "") {
										return product;
									} else if (
										product.title
											.toLowerCase()
											.includes(searching.toLowerCase()) ||
										toLowerCase().includes(selecttion.toLowerCase()) ||
										product.brand
											.toLowerCase()
											.includes(searching.toLowerCase()) ||
										toLowerCase().includes(selecttion.toLowerCase()) ||
										product.category
											.toLowerCase()
											.includes(searching.toLowerCase()) ||
										toLowerCase().includes(selecttion.toLowerCase())
									) {
										return product;
									}
								})
								.map((product) => (
									<tr key={product.id} product={product}>
										<td>
											<img src={checkbox} alt="" />
										</td>
										<td>{product.title}</td>
										<td>{product.brand}</td>
										<td>{product.price}</td>
										<td>{product.category}</td>
										<td>{product.description}</td>
										<td>
											<div className="action-buttons-wrapper">
												<div className="action-buttons">
													<img src={edit} alt="" />
												</div>
												<div className="action-buttons">
													<img
														onClick={() => handleDelete(product.id)}
														src={deletecart}
														alt=""
													/>
												</div>
											</div>
										</td>
									</tr>
								))}
						</table>
					</div>
					<Link
						to="/new-products"
						id="new-product"
						className="btn btn-group-sm btn-outline-success">
						New product
					</Link>
				</div>
			) : (
				<div className="container">no product available</div>
			)}
		</React.Fragment>
	);
};

export default Products;
