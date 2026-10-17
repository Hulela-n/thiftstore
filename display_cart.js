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
        total += item.price;
        html += `<div style="display: flex; margin: 0% 0% 0% 0%; padding:0% 0% 0% 0%; ">
                    <span>
                    <img style="width:50%; height:50%; border-radius:2vw; width:50%; height:50% "  src="${item.image}">
                    <p style="color: white; margin: 0% 20% 0% 15%;" >R ${item.price}</p>
                    </span>
                    <button style="display: flexbox; margin: 10% 20% 50% 0%; padding:2% 2% 2% 2%;" onclick="removeItem(${index})">Remove</button>
                </div>`;
    });
    
    document.getElementById('total').textContent = `R ${total.toFixed(2)}`;
    html+= '</ul>'
    body.innerHTML = html;
    localStorage.setItem('total', total);

}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();

    
}

displayCart()