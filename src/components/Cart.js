import { useSelector, useDispatch } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    const DeleteCart = () => {
        dispatch(clearCart());
    }
    return(
        <>
            <h1 className="mx-10 my-9 text-green-900 text-3xl">Cart-Items<span><button onClick={() => DeleteCart()} className="ml-6 p-2 text-xl border-green-500 text-green-500 bg-white border-2 rounded-md hover:bg-green-500 hover:text-white">Clear Cart</button></span></h1>
            <div className="flex flex-wrap m-2 p-2">
                {cartItems.map((item) => {
                    return(
                        <MenuCard key={item?.card?.info?.id} {...item.card?.info}/>
                    );
                })}
            </div>
        </>
    );
}

export default Cart;