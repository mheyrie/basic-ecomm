const cart = document.querySelector('.show-cart').addEventListener('click', cardQuantity);
const addCart = document.querySelector('.add-to-cart').addEventListener('click', addToCart);
const twoAddCart = document.querySelector('.increase-by-two').addEventListener('click', addTwoToCart);
const threeAddCart = document.querySelector('.increase-by-three').addEventListener('click', addThreeToCart);
const fourAddCart = document.querySelector('.increase-by-four').addEventListener('click', addFourToCart);
const fiveAddCart = document.querySelector('.increase-by-five').addEventListener('click', addFiveToCart);
const twoSubstractCart = document.querySelector('.substract-by-two').addEventListener('click', substractTwoFromCart);
const threeSubstractCart = document.querySelector('.substract-by-three').addEventListener('click', substractThreeFromCart);
const resetCartt = document.querySelector('.reset-cart');

// resetCartt.addEventListener('click', ResetCart)
let cartQuantity = 0;

function cardQuantity(){ 
    console.log(`Cart Quantity: ${cartQuantity}`)
};

function updateCartQuantity(value){
    if(cartQuantity + value > 10){
        alert("This cart is full, it can only contain 10 items")
    }else if(cartQuantity + value < 0){
        alert("Not enough items in the cart")
    }else{
        cartQuantity += value
        console.log(`Cart Quantity: ${cartQuantity}`)
    }
}

function addToCart(){
    updateCartQuantity(1)
}

function addTwoToCart(){
    updateCartQuantity(2)
}

function addThreeToCart(){
    updateCartQuantity(3)
}

function addFourToCart(){
    updateCartQuantity(4)
}

function addFiveToCart(){
    updateCartQuantity(5)
}

function removeFromCart(){
    updateCartQuantity(-1)
}

function substractTwoFromCart(){
    updateCartQuantity(-2)
}

function substractThreeFromCart(){
    updateCartQuantity(-3)
}

function resetCart(){
    console.log("Cart was reset")
    cartQuantity = 0
    console.log(`Cart Quantity: ${cartQuantity}`)
}


// Exercise 8
const product = {
    name: "baskekball",
    price: 2095
}

const product1 = {
    name: "book",
    price: 2000
}


product.price += 500 
product['delivery-time'] = "3 days"
product.available = true
// console.log(product)

function compareProduct(product1, product2){
    return product1.price<product2.price ? product1.name : product2.name
}

// console.log(compareProduct(product, product1))

function isSameProduct(product1, product2){
    return (product1.name === product2.name && product1.price === product2.price) ? true : false
}
console.log(isSameProduct(product,product1))
console.log("Good Morning".toLowerCase())
console.log("Good Morning".repeat(4))