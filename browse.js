$(document).ready(function() {
	loadData();

	function loadData(){
		let products = JSON.parse(localStorage.getItem("products"));
		if(products && products.length > 0){
			for(let i=0; i<products.length; i++){
				let product = JSON.parse(products[i]);
				$("#product-listings").append(product.markup);
			}
		}
	}
});