function addToCart() {
    const itemP = JSON.parse(localStorage.getItem('myProducts'));

    if (!itemP) {
        alert(`No items to be added`);
        return;

    }

    else {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.product === itemP.product)7;

            if (existingItem) {
                alert(`${existingItem.product} ALREADY IN YOUR CART`);
                window.location.href= 'home_page.html';}
            else {
                cart.push(itemP);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${itemP.product} ADDED TO YOUR CART`);
                window.location.href= 'checkout_page.html';}
    }
}