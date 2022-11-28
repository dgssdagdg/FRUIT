const cartWrapper = document.querySelector('.cart__wrapper');
//добовленине элементов в карзину
window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-card')) {
        const productCard = event.target.closest('.product__card')
        const productInfo ={
            id: productCard.dataset.id,
            imgSrc: productCard.querySelector('.product__card-img').getAttribute('src'),
            title: productCard.querySelector('.product__card-one-title').innerText,
            price: productCard.querySelector('.product__card-one-price').innerText,
            width: productCard.querySelector('.product__card-two-width').innerText,
        }
        console.log('sdlakfkl')
        const itemCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemCart) {
            const counterElement = itemCart.querySelector('[data-counter]');
            counterElement.innerText = ++counterElement.innerText;
        } else {
            const cardItemHTML = `<div data-id="${productInfo.id}" class="cart__item">
            <img src="${productInfo.imgSrc}" alt="" class="cart__img">
            <div class="cart-one">
                <div class="cart-one-title">${productInfo.title}</div>
                <div class="cart-one-price">${productInfo.price}</div>
            </div>
            <div class="cart-two">
                <div class="cart-two-width">${productInfo.width}</div>
                <div class="cart-two-box">
                    <button data-action="minus" class="cart-two-box-btn">-</button>
                    <div data-counter class="cart-two-box-coll">1</div>
                    <button data-action="plus" class="cart-two-box-btn">+</button>
                </div>
            </div>
        </div>`
        cartWrapper.insertAdjacentHTML('beforeend',cardItemHTML)
        }
        cartStatus()
        calcPrice()
    }
    
})


//Изиненение значения счетчика
window.addEventListener('click', function(event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const card = event.target.closest('.cart__item');
        counter = card.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
        calcPrice()
    }

    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
            calcPrice()
        } else if (event.target.closest('.cart__wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart__item').remove();
            cartStatus();

            calcPrice()
        }
    }
})
