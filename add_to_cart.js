function addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    if (cart) {
        const itemP = JSON.parse(localStorage.getItem('myProducts'));
        const existingItem = cart.find(item => item.product === itemP.product);

        if (existingItem) {
            alert(`${itemP.product} already in your cart`);}
        else {
            cart.push(itemP);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${item2.product} added to your cart`);
            window.location.href= 'checkout_page.html';
        }
    }
    else {
        alert('No items in cart');
    }
}