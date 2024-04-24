import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";

export const useRestaurantMenu = (resId) => {

    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        getRestaurantMenu();
    },[])
    
    async function getRestaurantMenu(){
        const data = await fetch( FETCH_MENU_URL + resId);
        const json = await data.json();
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        
    }

    return menu;
}

export const useRestaurantDetails = (resId) => {

    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantDetails();
    },[])
    
    async function getRestaurantDetails(){
        const data = await fetch( FETCH_MENU_URL + resId);
        const json = await data.json();
        setRestaurant(json?.data?.cards);
        
    }

    return restaurant;
}