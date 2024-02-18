const cart = document.querySelector('.show-cart');
const addCart = document.querySelector('.add-to-cart');
const twoAddCart = document.querySelector('.increase-by-two');
const threeAddCart = document.querySelector('.increase-by-three');
const fourAddCart = document.querySelector('.increase-by-four');
const fiveAddCart = document.querySelector('.increase-by-five');
const twoSubstractCart = document.querySelector('.substract-by-two');
const threeSubstractCart = document.querySelector('.substract-by-three');
const resetCartt = document.querySelector('.reset-cart');

let cartQuantity = 0;


function cardQuantity(){ 
    console.log(`Cart Quantity: ${cartQuantity}`)
};

function addToCart(){
    (cartQuantity >= 10) ? alert("This cart is full"): cartQuantity++
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function addTwoToCart(){
    (cartQuantity + 2 > 10) ? alert("This cart is full"): cartQuantity += 2
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function addThreeToCart(){
    (cartQuantity + 3 > 10) ? alert("This cart is full"): cartQuantity += 3
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function addFourToCart(){
    (cartQuantity + 4 > 10) ? alert("This cart is full"): cartQuantity += 4
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function addFiveToCart(){
    (cartQuantity + 5 > 10) ? alert("This cart is full"): cartQuantity += 5
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function removeFromCart(){
    (cartQuantity - 1 < 0) ? alert("No item in the cart"): cartQuantity--
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function substractTwoFromCart(){
    (cartQuantity - 2 < 0) ? alert("Not enough items in the cart"): cartQuantity -= 2
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function substractThreeFromCart(){
    (cartQuantity - 3 < 0) ? alert("Not enough items in the cart"): cartQuantity -= 3
    console.log(`Cart Quantity: ${cartQuantity}`)
}

function resetCart(){
    console.log("Cart was reset")
    cartQuantity = 0
    console.log(`Cart Quantity: ${cartQuantity}`)
}


cart.addEventListener('click', cardQuantity);
addCart.addEventListener('click', addToCart)
twoAddCart.addEventListener('click', addTwoToCart)
threeAddCart.addEventListener('click', addThreeToCart)
fourAddCart.addEventListener('click', addFourToCart)
fiveAddCart.addEventListener('click', addFiveToCart)
twoSubstractCart.addEventListener('click', substractTwoFromCart)
threeSubstractCart.addEventListener('click', substractThreeFromCart)
// resetCartt.addEventListener('click', ResetCart)
