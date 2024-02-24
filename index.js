const cart = document.querySelector('.show-cart')
const addCart = document.querySelector('.add-to-cart').addEventListener('click', addToCart);
const twoAddCart = document.querySelector('.increase-by-two').addEventListener('click', addTwoToCart);
const threeAddCart = document.querySelector('.increase-by-three').addEventListener('click', addThreeToCart);
const fourAddCart = document.querySelector('.increase-by-four').addEventListener('click', addFourToCart);
const fiveAddCart = document.querySelector('.increase-by-five').addEventListener('click', addFiveToCart);
const twoSubstractCart = document.querySelector('.substract-by-two').addEventListener('click', substractTwoFromCart);
const threeSubstractCart = document.querySelector('.substract-by-three').addEventListener('click', substractThreeFromCart);
const resetCartt = document.querySelector('.reset-cart');
const display = document.querySelector(".show-text")


// resetCartt.addEventListener('click', ResetCart)
let cartQuantity = 0;

//displays cart quantity immediately page loads
cardQuantity()

function cardQuantity(){ 
        display.innerHTML = `Cart Quantity: ${cartQuantity}`
    };

function updateCartQuantity(value){
    if(cartQuantity + value > 10){
        alert("This cart is full, it can only contain 10 items")
        return;
    }else if(cartQuantity + value < 0){
        alert("Not enough items in the cart")
        return;

    }else{
        cartQuantity += value
        
        cardQuantity()
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
    cartQuantity = 0
    console.log("Cart was reset")
    
    cardQuantity()
}

/*
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
// console.log("Good Morning".repeat(4))*/