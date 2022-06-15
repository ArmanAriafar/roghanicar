//? Required
import { useContext, useReducer, createContext } from "react";

const cartContext = createContext();
const cartContextDispatcher = createContext();

//? Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const copyCart = [...state.cart];
            const index = copyCart.findIndex((item) => item.id === action.payload.id);
            if (index < 0) {
                copyCart.push({ ...action.payload, quantity: 1 });
            }
            return { ...state, cart: copyCart, total: state.total + action.payload.price };
        }
        case "INCREMENT": {
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex((item) => item.id === action.payload.id);
            const updatedItem = { ...updatedCart[index] };
            updatedItem.quantity++;
            updatedCart[index] = updatedItem;
            return { ...state, cart: updatedCart, total: state.total + action.payload.price };
        }
        case "DECREMENT": {
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex((item) => item.id === action.payload.id);
            const updatedItem = { ...updatedCart[index] };
            if (updatedItem.quantity <= 1) {
                const filteredCart = updatedCart.filter((item) => item.id !== action.payload.id);
                return { ...state, cart: filteredCart };
            } else {
                updatedItem.quantity--;
                updatedCart[index] = updatedItem;
                return { ...state, cart: updatedCart, total: state.total - action.payload.price };
            }
        }
        default:
            return state;
    }
};

//? initialState
const initialState = {
    cart: [],
    total: 0,
};

//? Component
export default function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, initialState);
    return (
        // prettier-ignore
        <cartContext.Provider value={cart}>
            <cartContextDispatcher.Provider value={dispatch}>
                {children}
            </cartContextDispatcher.Provider>
        </cartContext.Provider>
    );
}

export const useCart = () => useContext(cartContext);
export const useCartActions = () => useContext(cartContextDispatcher);
