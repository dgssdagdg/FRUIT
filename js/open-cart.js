document.addEventListener('click', function(event) {
    const cart = document.querySelector('.cart');
    if (!event.target.closest('.header__buttons')) {
        cart.classList.add('none');
    }
    if (event.target.closest('.header__cart')) {
        cart.classList.toggle('none');
    }
})