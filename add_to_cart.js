function addToCart() {
    const itemP = JSON.parse(localStorage.getItem('myProducts'));

    if (!itemP) {
        alert(`No items to be added`);
        return;

    }

    else {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.product === itemP.product);

            if (existingItem) {
                alert(`${existingItem.product} already in your cart`);
                window.location.href= 'home_page.html';}
            else {
                cart.push(itemP);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${itemP.product} added to your cart`);
                window.location.href= 'checkout_page.html';}
    }
}