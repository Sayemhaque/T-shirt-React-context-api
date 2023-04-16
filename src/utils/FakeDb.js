//Add data to localStorage

const addToLocalStorage = (id) => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem("shopping-cart" , JSON.stringify(shoppingCart))
}

const getDataLocalStorage = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}


export {addToLocalStorage , getDataLocalStorage} 