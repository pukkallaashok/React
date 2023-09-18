import {useSelector} from "react-redux";
import ItemList from "./utils/ItemList";
import {useDispatch} from "react-redux";
import { clearCart } from "./utils/cartSlice";

const CartStore = () => {
const cartItems = useSelector((state) => state.cart.items );


const dispatch = useDispatch();
const handleClear = () => {
    dispatch(clearCart());
}

    return (
        <div className="text-center m-4 p-2">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white" onClick={handleClear}>clearCart</button>
                {cartItems.length == 0 && <h1>your cart is empty please add items</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default CartStore;