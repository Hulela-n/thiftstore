function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const body = document.getElementById('body')

    let html = '<ul>';
    let total = 0;

    if (cart.length === 0) {
        body.innerHTML = '<p style="text-align: center; color: black; background-color: white; margin: 0% 20% 0% 20%; text-align: center; border-radius: 2vw">NO ITEMS TO DISPLAY</p>';
        document.getElementById('price').textContent = 'R0'
    }

    cart.forEach((item, index) => {
        html += `<div style="display: block">
                    <img style="width:30%; height:30%; border-radius:2vw "  src="${item.image}">
                    <p style="color: white; margin: 0% 20% 0% 8%;" >R ${item.price}</p>
                    <button style="margin: 0% 0% 0% 40%; padding:2% 2% 2% 2%;" onclick="removeItem('${item}')">Remove</button>
                </div>`;
        total += item.price
        html += '</ul>'
    });

    body.innerHTML = html;
    document.getElementById('total').textContent = `R${total.toFixed(2)}`;
    localStorage.setItem('total', total)
}

function removeItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(item.product);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();

    
}

displayCart()