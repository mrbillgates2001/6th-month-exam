import React from "react";
import { emptyList } from "../../assets/images";
import { Link } from "react-router-dom";

const NoProducts = () => {
	return (
		<div className="no-products d-flex flex-column align-items-center justify-content-center mx-auto mt-5">
			<h6>You haven't created any products yet</h6>
			<img src={emptyList} alt="" />
			<Link to='/new-products' className="btn btn-outline-success mt-5">Create new product</Link>
		</div>
	);
};

export default NoProducts;
