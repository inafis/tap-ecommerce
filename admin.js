$(document).ready(function() {
	let products = JSON.parse(localStorage.getItem("products"));
	if(!products){
			products = [];
		}
	let productEntry = {
		"productName": "",
		"imageSrc":"",
		"description":"",
		"id":"",
		"markup":""
	};
	$('#addProductBtn').on('click', function(event) {
		event.preventDefault();

		var productName = $("#productName").val();
		var imageLink = $("#imageLink").val();
		var description = $("#description").val();

		addProduct(productName, imageLink, description);

		var productName = $("#productName").val("");
		var description = $("#description").val("");
	});

	function addProduct(productName, productImage, productDescription){
		productEntry.productName = productName;
		productEntry.imageSrc = productImage;
		productEntry.description = productDescription;
		productEntry.id = products.length+1;
		productEntry.markup = "<div class=\"col-sm-4 text-center my-2\">" + 
			"<div class=\"product-listing\"><img class=\"rounded\" src="+ productEntry.imageSrc +">" +
			"<p class=\"product-label\">"+productEntry.productName+"</p></div><button class=\"btn btn-primary mt-2\">Add to Cart</button></div>";
		products.push(JSON.stringify(productEntry));
	
		localStorage.setItem("products", JSON.stringify(products));
	};
});