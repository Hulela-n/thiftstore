function snatchProduct(product, size, price, image) {
    
    const item = {
        product: product,
        size: size,
        price: price, 
        image: image
    };
    
    localStorage.setItem('myProducts', JSON.stringify(item));
    window.location.href = 'view_item.html';
}