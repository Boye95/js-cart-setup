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
                item.name = name;
                let price = 
                    event.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                const cartItem = document.createElement('div');
                    cartItem.classList.add(
                      "cart-item",
                      "d-flex",
                      "justify-content-between",
                      "text-capitalize",
                      "my-3"
                    );

                    cartItem.innerHTML = 
                        `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                        <div class="item-text">
            
                        <p id="cart-item-title" class="font-weight-bold mb-0">
                            ${item.name}
                        </p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price" class="mb-0">
                            ${item.price}
                        </span>
                        </div>
                        <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                        </a>
                    `;

                    // select cart

                        const cart = document.querySelector('#cart');
                        const total = document.querySelector('.cart-total-container');
                        
                        cart.insertBefore(cartItem, total);
                        // alert('item added to the cart');
                        showTotals();

            };
        });
        
    });
        
    // show totals

    function showTotals() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach( (item) => {
            total.push(parseFloat(item.textContent));
        });
        

        const totalMoney = total.reduce( (total, item) => {
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        document.querySelector('#cart-total').textContent = finalMoney;
        // document.querySelector('.item-total').textContent = finalMoney;
        // document.querySelector('#item-count').textContent = total.length;

        const cartInfo = document.querySelector('#cart-info');
        const priceLength = document.createElement('div');
        priceLength.innerHTML = 
            `
                <p class="mb-0 text-capitalize"><span id="item-count">${total.length} 
                </span> items - $<span class="item-total">${finalMoney}</span></p>
            `;
        cartInfo.appendChild(priceLength);
                console.log(cartInfo.children[1]);

    }
})();