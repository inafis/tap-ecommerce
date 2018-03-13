$(document).ready(function() {
	var products = JSON.parse(localStorage.getItem("products"));
	if(!products){
			products = [];
		}
	var productEntry = {
		"productName": "",
		"imageSrc":"",
		"description":"",
		"id":"",
		"markup":""
	};
	$('#addProductBtn').on('click', function(event) {
		event.preventDefault();

		let productName = $("#productName").val();
		let imageLink = $("#imageLink").val();
		let description = $("#description").val();

		addProduct(productName, imageLink, description);

		$("#productName").val("");
		$("#description").val("");
	});

	function addProduct(productName, productImage, productDescription){
		productEntry.productName = productName;
		productEntry.imageSrc = productImage;
		productEntry.description = productDescription;
		productEntry.id = products.length+1;
		productEntry.markup = generateElement(productEntry.id, productName, productImage)
		products.push(JSON.stringify(productEntry));

		localStorage.setItem("products", JSON.stringify(products));
	};

	function generateElement(id, name, image) {
		return "<div class=\"col-sm-4 text-center my-2\">" +
			"<div class=\"product-listing\"><img class=\"rounded\" src="+ image +">" +
			"<p class=\"product-label\">"+name+"</p></div><button id=\"browse_item_"+ id +"\" onClick=\"addToCart(" + id +")\" class=\"btn btn-primary mt-2\">Add to Cart</button></div>";
	}
});
