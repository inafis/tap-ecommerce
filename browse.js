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

function addToCart(id) {
	var cartItems = JSON.parse(localStorage.getItem("cartItems"))
	if(!cartItems) {
		cartItems = []
	}
	let product = JSON.parse(localStorage.getItem("products"))[id - 1]
	cartItems.push(product)
	localStorage.setItem("cartItems", JSON.stringify(cartItems))
}
