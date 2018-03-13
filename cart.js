$(document).ready(function() {
	loadData();

	function loadData() {
		let products = JSON.parse(localStorage.getItem("cartItems"));
		if(products) {
			products.forEach(function(productString) {
				let product = JSON.parse(productString)
				$("#cart").append(generateCartElement(product));
			})
		}
	}


  function generateCartElement(product) {
    return `<div class="media mb-2">
      <img class="mr-3 checkOutImages" src="`+ product.imageSrc +`" alt="Generic placeholder image">
      <div class="media-body">
        <h5 class="mt-0">`+ product.productName +`</h5>
        `+ product.description +`
      </div>
    </div>`
  }
});
