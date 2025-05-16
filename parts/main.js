const cartBtn = document.querySelector('.shopping');
const cartPanel = document.querySelector('.card');
const closeBtn = document.querySelector('.closeShopping');
const checkoutBtn = document.querySelector('.checkoutBtn');

const listCard = document.querySelector('.listCard');
const quantitySpan = document.querySelector('.quantity');
const buyButtons = document.querySelectorAll('.btn');
const totalPriceEl = document.querySelector('.total');

let cartItems = [];
let totalPrice = 0;

cartBtn.addEventListener('click', () => {
    cartPanel.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    cartPanel.classList.remove('active');
});

buyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const box = btn.closest('.box');
        const imgSrc = box.querySelector('img').src;
        const title = box.querySelector('h3').innerText;
        const priceText = box.querySelector('span').innerText;
        const price = parseFloat(priceText.replace('$', ''));

        const item = {
            img: imgSrc,
            title,
            price
        };

        cartItems.push(item);
        totalPrice += price;
        updateCartUI();
    });
});

function updateCartUI() {
    listCard.innerHTML = '';
    cartItems.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.img}" alt="">
            <div>
                <h4>${item.title}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        `;
        listCard.appendChild(li);
    });

    quantitySpan.innerText = cartItems.length;
    totalPriceEl.innerText = `$${totalPrice.toFixed(2)}`;
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        alert(`Proceeding to checkout. Total: $${totalPrice.toFixed(2)}`);
    });
}
