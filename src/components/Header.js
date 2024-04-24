import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "./config";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () =>{
    return(
        <a href="/"><img className="h-24 ml-4 py-2 px-3" src={APP_LOGO}/></a>
    );
}

            //If tailwind does not show autcomplete css press ctrl + spacebar

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return(
      <div className="flex justify-between bg-green-200 shadow-lg">
        <Title />
        <div>
          <ul className="flex">
            <li className="px-8 py-8 text-green-900 font-bold text-xl"><Link to="/">Home</Link></li>
            <li className="px-8 py-8 text-green-900 text-xl"><Link to="/instamart">Instamart</Link></li>
            <li className="px-8 py-8 text-green-900 text-xl"><Link to="/about">About Us</Link></li>
            <li className="px-8 py-8 text-green-900 text-xl"><Link to="/contact">Contact</Link></li>
            <li className="px-8 py-8 text-green-900 text-xl"><Link to="/cart">Cart-{cartItems.length} items</Link></li>
            <span className="px-8 py-8 text-red-900 text-xl">{user.name}</span>
            <li className="px-8 py-8 text-green-900 text-xl">{((isLoggedIn) ? <button onClick={(e)=>setIsLoggedIn(false)}>Log Out</button> : <button onClick={(e)=>setIsLoggedIn(true)}>Log In</button>)}</li>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;