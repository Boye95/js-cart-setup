// show cart

(function() {
    const cartInfo = document.querySelector('#cart-info');
    const cart = document.querySelector('#cart');

    cartInfo.addEventListener('click', () => {
        cart.classList.toggle('show-cart');
    })
})();

// add items to cart

(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    
    cartBtn.forEach( (btn) => {

        btn.addEventListener("click", (event) => {

            if(event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf("img") + 3;
                let partialPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partialPath}`;
                let name = 
                    event.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[0].textContent;
                let price = 
                    event.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;
                console.log(item);
            };
        });
        
    });
        
})();