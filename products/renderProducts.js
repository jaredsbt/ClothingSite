const productsE = document.querySelector(".products ");

function renderProducts() {
    products.forEach((product) => {
        productsE.innerHTML += `
            <div class = "flex-container-column">
                <div class = "item">
                    <div class = "item-container" style = "width: 300px; height: 300px">
                        <div class = "flex-container-column">
                            <div class = "desc">
                                <h2>${product.name}</h2>
                                    <div class = "flex-container-row">
                                        <h2><small>$</small>${product.price}</h2>
                                        <div class = "add-to-cart" onclick = "addToCart(${product.id})">
                                            <img src = "" style = "width: 25px; height: 25px">
                                        </div>
                                    </div>
                                <div class = "product-Images"><img src = ${product.imageSrc} style = "width: 100px; height: 100px"></div>
                                <p>${product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
renderProducts();
