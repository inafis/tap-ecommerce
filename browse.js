$(document).ready(function() {
	loadData();

	function loadData() {
		let products = JSON.parse(localStorage.getItem("products"));
		if(products) {
			products.forEach(function(productString) {
				let product = JSON.parse(productString)
				$("#product-listings").append(product.markup);
			})
		}
	}
});
