import { IMG_CDN_URL } from "./config";

export const RestaurantCard = ({ cloudinaryImageId,name,cuisines,avgRating }) =>{
    return(
      <div className="w-[240] h-[388] shadow-lg m-2 p-5 hover:bg-emerald-400 hover:text-white">
        <img className="w-[240] h-[200]" src= {IMG_CDN_URL + cloudinaryImageId } />
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} star rating</p>
      </div>
    );
}

