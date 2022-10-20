//Objects for cart items
let limestone = {
    price: 15,
    quantity: 1
}

let bertrandite = {
    price: 25,
    quantity: 1
}

// Functions
function updateQuantity(stone, target) {
    target.textContent = `Quantity: ${stone.quantity}`
}
function updateTotal(stone, target) {
    total = stone.price * stone.quantity
    target.textContent = `Total: ${total}`
}

function addItem(stone, target, target2) {
    stone.quantity += 1
    stone.total += stone.price
    updateQuantity(stone, target)
    updateTotal(stone, target2)
}

function subItem(stone, target, target2) {
    if (stone.quantity > 0) {
        stone.quantity -= 1
        updateQuantity(stone, target)
        updateTotal(stone, target2)
    }
}

// First cart item
let cartItem1 = document.querySelector('#cart-item1')

let removeButton1 = document.querySelector('#remove1')
removeButton1.addEventListener('click', function(e){
    cartItem1.remove()
})

let quantityTotal1 = document.querySelector('#qual-total1')
let priceTotal1 = document.querySelector('#total1')
priceTotal1.textContent = `Total: ${limestone.price}`

let quantityDown1 = document.querySelector('#quantity-down1')
quantityDown1.addEventListener('click', function(e){
    if (limestone.quantity > 0) {
        subItem(limestone, quantityTotal1, priceTotal1)
    }
})
let quantityUp1 = document.querySelector('#quantity-up1')
quantityUp1.addEventListener('click', function(e){
    addItem(limestone, quantityTotal1, priceTotal1)
})

// Second cart item
let cartItem2 = document.querySelector('#cart-item2')

let removeButton2 = document.querySelector('#remove2')
removeButton2.addEventListener('click', function(e){
    cartItem2.remove()
})

let quantityTotal2 = document.querySelector('#qual-total2')
let priceTotal2 = document.querySelector('#total2')
priceTotal2.textContent = `Total: ${bertrandite.price}`

let quantityDown2 = document.querySelector('#quantity-down2')
quantityDown2.addEventListener('click', function(e){
    if (bertrandite.quantity > 0) {
        subItem(bertrandite, quantityTotal2, priceTotal2)
    }
})
let quantityUp2 = document.querySelector('#quantity-up2')
quantityUp2.addEventListener('click', function(e){
    addItem(bertrandite, quantityTotal2, priceTotal2)
})
