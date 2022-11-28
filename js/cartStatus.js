function cartStatus() {
    const cartWrapper = document.querySelector('.cart__wrapper');
    const korzina = document.querySelector('.cart__korzina');
    const form = document.querySelector('#form');

    if (cartWrapper.children.length > 0) {
        korzina.classList.add('none');
        form.classList.remove('none');
    } else {
        korzina.classList.remove('none');
        form.classList.add('none');
    }
}