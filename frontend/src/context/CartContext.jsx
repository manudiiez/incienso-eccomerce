import { createContext, useContext, useEffect, useReducer } from "react";


const INITIAL_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};


export const CartContext = createContext(INITIAL_STATE);


export const useCart = () => {
    const context = useContext(CartContext)
    return context
}

const CartReducer = (state, action) => {
    const cart = JSON.parse(window.localStorage.getItem('cart'))

    switch (action.type) {
        case "GET_CART":
            console.log(window.localStorage.getItem('cart'));
            return {
                cart: JSON.parse(localStorage.getItem("cart")),
            };
        case "ADD_CART":
            const index = searchItem(action.data, cart)
            if (index === -1) {
                cart.push(action.data)
            } else {
                cart[index].cant = cart[index].cant + action.data.cant
            }
            return {
                cart: cart,
            };
        case "ADD_ONE_CART":
            const index3 = searchItem(action.data, cart)
            cart[index3].cant = cart[index3].cant + 1 
            return {
                cart: cart,
            };
        case "DELETE_CART":
            const index2 = searchItem(action.data, cart)
            if(index2 !== -1){
                if(cart[index2].cant > 1){
                    cart[index2].cant = cart[index2].cant -1 
                }else{
                    cart.splice(index2, 1)
                }
            }
            return {
                cart: cart,
            };
        default:
            return state;
    }
};

const searchItem = (item, cart) => {
    const index = cart.findIndex(product => product._id === item._id)
    return index
}


export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
