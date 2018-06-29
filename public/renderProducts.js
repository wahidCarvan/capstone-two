// jquery
// when document is ready do something
$(document).ready(function(event){
	products.forEach(product => {
		$('#product-details').append(`
			<div class="col-3">
				<div class="card">
					<img src="http://via.placeholder.com/350x150" alt="place holder image"/>
				 	<h5 class="card-title">${product.name}</h5>
					<div class="card-body">
					    <p class="card-text">
					    <span class="strikethrough-price">$99.99</span>
					    <br>
					    <span class="our-price">$${product.price}</span></p>
					    	<button class="add-to-cart">Add to Cart</button>

					</div>
				</div>
			</div>
		`);
	});

});

$(document).ready(function(event){
	

})


// add the button add to cart

// make a new file make a shopping cart array

// click add to cart push to new item 