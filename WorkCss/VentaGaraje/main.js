const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu-movil');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-details');
const cardsContainer = document.querySelector('.card-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {
    carritoMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');  //quita o pone la clase inactive
}
function toggleMobileMenu() {
    carritoMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');  //quita o pone la clase inactive
}
function toggleCarritoMenu() {

    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    carritoMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Cafetera',
    price: 120,
    image: 'logos/cafetera.jpg',
});
productList.push({
    name: 'Cafetera',
    price: 120,
    image: 'logos/cafetera.jpg',
});
productList.push({
    name: 'Cafetera',
    price: 120,
    image: 'logos/cafetera.jpg',
});
productList.push({
    name: 'Cafetera',
    price: 120,
    image: 'logos/cafetera.jpg',
});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('product-img');

    const productInfo = document.createElement('div');
    productCard.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.append(productImgCard);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
}