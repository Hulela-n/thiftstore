const item = JSON.parse(localStorage.getItem('myProducts'));

if (item) {
    document.getElementById('image').src = item.image;
    document.getElementById('product').textContent = item.product;
    document.getElementById('price').textContent = `R${item.price}`;
}


function back() {
    window.location.href = 'home_page.html'
}