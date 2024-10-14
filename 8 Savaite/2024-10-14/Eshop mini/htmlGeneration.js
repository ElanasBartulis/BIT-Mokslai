function createHtmlProductsTable(products = produktai) {
	let htmlCode = "";
	for (const indeksas in products) {
		const product = products[indeksas];
		htmlCode += `<tr>
        <td>${deleteIcon(indeksas)}${updateIcon(indeksas)}</td>
        <td>${product.title}</td>
        <td>${product.description.slice(0, 15)}...</td>
        <td>${product.stock}</td>
        <td>${product.price}€</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
    </tr>`;
	}
	return htmlCode;
} //Generuojamas HTML kodas. String

function updateHtmlTable(products = produktai) {
	const htmlCode = createHtmlProductsTable(products);
	const tbodyElement = document.getElementById("products-list");
	tbodyElement.innerHTML = htmlCode;
}

function generateProducts() {
	const parduotuvesProduct = generateProduct();
	const productHTML = document.querySelector(".products");
	productHTML.innerHTML = parduotuvesProduct;
}
generateProducts()

function generateProduct(product = produktai) {
	let html = "";
    product.map((value) => {
		if(value.discount > 0) html += generateProductWithDiscount(value);
		else html += generateProductWithoutDiscount(value);
	})
	return html;
}

function generateProductWithDiscount(value) {
	const discountedPrice = value.price - (value.price * (value.discount / 100));
	return 	`<div class="product">
	<hr />
	<div class="product-details">
		<div class="image">
			<img
				src="https://placehold.co/200x200"
				alt="Produkto nuotrauka"
			/>
			<span class="discount">${value.discount}%</span>
		</div>
		<div class="details">
			<h4>${value.title}</h4>
			<p>${value.description}</p>
		</div>
		<div class="price-and-actions">
			<!-- <div class="price">${value.price}€</div> -->
			<div class="price-with-discount">
				<span class="discounted">${+discountedPrice}€</span>
				<span class="old-price">${value.price}€</span>
			</div> 
			<button>Add to cart</button>
		</div>
	</div>
</div>`
}

function generateProductWithoutDiscount(value) {
	return `<div class="product">
				<hr />
				<div class="product-details">
					<div class="image">
						<img
							src="https://placehold.co/200x200"
							alt="Produkto nuotrauka"
						/>
						<span class="discount">${value.discount}%</span>
					</div>
					<div class="details">
						<h4>${value.title}</h4>
						<p>${value.description}</p>
					</div>
					<div class="price-and-actions">
						<div class="price">${value.price}€</div>
						<!-- <div class="price-with-discount">
							<span class="discounted">250.00€</span>
							<span class="old-price">300.00€</span>
						</div> -->
						<button>Add to cart</button>
					</div>
				</div>
			</div>`
}