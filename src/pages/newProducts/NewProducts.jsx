import React, { useState } from "react";
import "./NewProducts.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const NewProducts = ({ setProducts, fetchProducts }) => {
	const [add, setAdd] = useState([
		{
			title: "",
			price: "",
			brand: "",
			description: "",
			category: "",
		},
	]);
	console.log(add);

	const handleAdd = async () => {
		try {
			const res = await axios.post("http://localhost:3000/products", add);
			fetchProducts();
		} catch (error) {
			console.log(error)
		}
	};

	

	return (
		<React.Fragment>
			<div className="new-products">
				<div className="container ">
					<h1>Create new product</h1>
					<form class="row g-3 needs-validation " noValidate>
						<div class="col-md-4">
							<label for="validationCustom01" class="form-label">
								Name
							</label>
							<input
								type="text"
								class="form-control"
								id="validationCustom01"
								value={add.title}
								onChange={(e) => setAdd({ ...add, title: e.target.value })}
								name="title"
								required
							/>
							<div class="valid-feedback">Looks good!</div>
						</div>
						<div class="col-md-4">
							<label for="validationCustom02" class="form-label">
								Brand
							</label>
							<input
								type="text"
								class="form-control"
								id="validationCustom02"
								value={add.brand}
								onChange={(e) => setAdd({ ...add, brand: e.target.value })}
								name="brand"
								required
							/>
							<div class="valid-feedback">Looks good!</div>
						</div>
						<div class="col-md-4">
							<label for="validationCustomUsername" class="form-label">
								Price
							</label>
							<div class="input-group has-validation">
								<span class="input-group-text" id="inputGroupPrepend">
									$
								</span>
								<input
									type="text"
									class="form-control"
									id="validationCustomUsername"
									aria-describedby="inputGroupPrepend"
									value={add.price}
									onChange={(e) => setAdd({ ...add, price: e.target.value })}
									name="price"
									required
								/>
								<div class="invalid-feedback">Please choose a username.</div>
							</div>
						</div>
						<div class="col-md-3">
							<label for="validationCustom04" class="form-label">
								Category
							</label>
							<select
								class="form-select"
								id="validationCustom04"
								value={add.category}
								onChange={(e) => setAdd({ ...add, category: e.target.value })}
								name="category"
								required>
								<option selected disabled value="">
									Choose a category
								</option>
								<option>Smartphones</option>
								<option>Laptops</option>
								<option>fragrances</option>
								<option>skincare</option>
							</select>
							<div class="invalid-feedback">Please select a valid state.</div>
						</div>

						<div class="mb-3">
							<label for="validationTextarea" class="form-label">
								Description
							</label>
							<textarea
								class="form-control w-50"
								id="validationTextarea"
								placeholder="Please enter a description"
								value={add.description}
								onChange={(e) =>
									setAdd({ ...add, description: e.target.value })
								}
								name="description"
								required></textarea>
							<div class="invalid-feedback">Please enter a description.</div>
						</div>
						<div class="col-12 d-flex align-content-center gap-2">
							<div class="form-check ">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="invalidCheck"
									required
								/>
								<label class="form-check-label" for="invalidCheck">
									Please confirm if all data are correct
								</label>
								<div class="invalid-feedback">
									You must agree before submitting.
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="submit-buttons d-flex align-content-center justify-content-center gap-3">
					<Link
						to="/products"
						onClick={handleAdd}
						class="btn btn-success px-4"
						type="submit">
						Save
					</Link>
					<button class="btn btn-light px-4" type="submit">
						Cancel
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NewProducts;
