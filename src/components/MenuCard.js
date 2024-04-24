import { IMG_CDN_URL } from "./config";

const MenuCard = ({ imageId, name, defaultPrice }) => {
    return(
        <div className="w-[240] h-[250] shadow-lg m-2 p-5 hover:bg-emerald-400 hover:text-white rounded-md">
            <img className="w-[240] h-[150]" src={IMG_CDN_URL + imageId} />
            <p>{name}</p>
            <p>{defaultPrice}</p>
        </div>
    );
}

export default MenuCard;