document.addEventListener("DOMContentLoaded", function(){
    const productsList = document.getElementById("productsList");
    const products = [
         {name: "Razer Blade 15 - QHD 240Hz - GeForce RTX 3070 Ti - Black", price:"$1799",image:"razer1.png"},
        {name: "Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury", price:"$1999", image:"razer2.png"},
        {name: "Razer Blade 17 - UHD 144Hz - GeForce RTX 3070 Ti - Black ", price:"$2299", image:"razer3.png"}

    ];
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className="product";

        const imageElement = document.createElement("img");
        imageElement.src=product.image;
        imageElement.alt=product.name;

        const nameElement = document.createElement("h3");
        nameElement.textContent=product.name;

        const priceElement = document.createElement("p") ;
        priceElement.textContent=product.price;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        productsList.appendChild(productElement);
        });
        const scrollToProductsLink=document.getElementById("scrollToProducts");
        const featuredProducts=document.getElementById("featuredProducts");
        scrollToProductsLink.addEventListener("click",function(event){event.preventDefault();
            featuredProducts.scrollIntoView({ behavior:"smooth"
        });
        });
        });
