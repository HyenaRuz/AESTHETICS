let open = document.querySelector('.cart');
let close = document.querySelector('.delete-order')
let order = document.querySelector('.your-order');

// console.log(open.onclick, close.onclick);

const toggle = (event, state) => {
    event.preventDefault();
    if (state){
        order.classList.add('open')
    } else {
        order.classList.remove('open')
    }
};

open.onclick = e => toggle(e, true)

close.onclick = e => toggle(e, false)
