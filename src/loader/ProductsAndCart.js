import { getDataLocalStorage } from "../utils/FakeDb";


export const productsAndCartData =  async () => {
    const res = await fetch('t-shirts.json')
    const products = await res.json();

    let cart = [];
    const savedCart = getDataLocalStorage();
  
    for(const id in savedCart){
        const exist = products.find(product => product._id === id)
        if(exist){
            exist.quantity = savedCart[id]
            cart.push(exist)
        }
    }

    return {cart , products}
     
}
