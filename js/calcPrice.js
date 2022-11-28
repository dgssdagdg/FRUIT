console.log('odasfjk');
function calcPrice() {
    const cartWrapper = document.querySelector('.cart__wrapper');
    const priceElements = cartWrapper.querySelectorAll('.cart-one-price');
    const itogPrice = document.querySelector('.cart__itog-price');
    
    const cartDeliveryFree = document.querySelector('[data-delivery-free]')
    const deliveryCost = document.querySelector('.cart__delivery-price');
    const cartDelivery = document.querySelector('[data-delivery-cost]');


    let priceTotal = 0;

    priceElements.forEach(function (item) {
        const amountEl = item.closest('.cart__item').querySelector('[data-counter]');
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    })

    itogPrice.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
        cartDeliveryFree.classList.add('none');
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
        cartDeliveryFree.classList.remove('none');
    }
}