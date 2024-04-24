import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import { useRestaurantMenu, useRestaurantDetails } from "../utils/useRestaurantmenu";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";


const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurantMenu = useRestaurantMenu(resId);
    const restaurantDetails = useRestaurantDetails(resId);
    const store = useSelector(store => store.cart.ids);
    const dispatch = useDispatch();

    const handleItem = (item) => {
        dispatch(addItem(item));
    }
    const handleRemoveItem = (item) => {
        let iD = item?.card?.info?.id
        console.log(store);
        dispatch(removeItem(iD));
    }
    return (!restaurantDetails) ? (
            <Shimmer /> 
        ): (
        <>
        <h1 className="mt-10 ml-16 text-emerald-500 text-4xl">{restaurantDetails[0]?.card?.card?.info?.name}</h1>
        <div className="p-5 m-5 flex">
            <img className="w-[240] h-[200] rounded-md m-4 p-2" src={IMG_CDN_URL + restaurantDetails[0]?.card?.card?.info?.cloudinaryImageId} />
            <div className="w-[550] m-6 p-4 bg-emerald-100 relative">
                <h1 className="bg-white font-bold m-2 p-2 rounded-sm">Menu :</h1>
                 <ul className="relative">
                    {(!restaurantMenu) ? <h1 className="m-3">Closed currently</h1> :
                    restaurantMenu.map((item)=>{
                        return <li className="" key={item?.card?.info?.id}>{item?.card?.info?.name}
                        <button className="absolute right-20 px-2 text-orange-600 hover:text-white hover:bg-emerald-400 hover:rounded-md" onClick={() => handleItem(item)}>Add</button>
                        <button className="absolute right-0 px-2 text-orange-600 hover:text-white hover:bg-emerald-400 hover:rounded-md" onClick={() => handleRemoveItem(item)}>Remove</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}

export default RestaurantMenu;