import { useEffect, useState } from "react";
import { restaurantData, rData } from "./config";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { REST_URL } from "./config";
import { useOnline } from "../utils/useOnline";

const Body = () =>{
    const [searchText,setSearchText] = useState("");
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const isOnline = useOnline();


    useEffect(()=>{
        getRestaurants();
    }, []);
    //Empty dependency array means it will make the call once after the renderning.
    //if there is any dependecy then the function in useEffect will be called once after the render, is called whenever there is change in the dependency.

    async function getRestaurants(){
        const data = await fetch(REST_URL);
        //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING  - restaurants api
        //https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=74453  - restaurant menu api
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // ? - optional chaining => If the data not available in the object it returns "undefined" instead of throwing error.
    } 

    if(!isOnline) return <h1>Check your Internet Connection</h1>;

    if(filteredRestaurants.length === 0 && searchText.length != 0) return (
        <h1>No Restaurants Found!</h1>
        );

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
        <div className="mx-10 my-8">
            <input type="text" className="p-2 w-6/12 rounded-sm border-2 border-gray-400 mr-8" placeholder="Search" value={searchText} onChange={(e)=>{
                return setSearchText(e.target.value);
            }}/>
            <button className="font-semibold p-2 bg-white text-green-400 border-2 border-green-300 rounded-md w-20 hover:bg-green-500 hover:text-white" onClick={()=>{
                const data = filterData(searchText,allRestaurants);
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
        <div className="flex flex-wrap m-2 p-2">
            {filteredRestaurants.map((restaurant)=>{
                return <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard  {...restaurant.info} /></Link>
            })}
      </div>
        </>
    );

}

export default Body;
