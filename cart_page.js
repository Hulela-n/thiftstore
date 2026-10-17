function adjustMenu() {
        const body = document.getElementById('body')
        const cart = JSON.parse(localStorage.getItem('cart'))


        function upMenu(){
            body.classList.add('up')
        }


        if (cart.length===0) {
            upMenu()
        }
    }

adjustMenu()