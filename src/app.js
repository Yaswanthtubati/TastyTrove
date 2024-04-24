import React, { Suspense, lazy, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import { restaurantData } from "./components/config";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { RestaurantCard } from "./components/RestaurantCard";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("../src/components/Instamart"));

const About = lazy(() => import("../src/components/About"));

const AppLayout = () =>{
  const [user, setUser] = useState({
    name : "Yaswanth",
    email : "yeswanthtubati@gmail.com"
  });
  return(
    <Provider store={store}>
    <UserContext.Provider value={{
      user : user,
      }}>
      <Header/>
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <Suspense><About /></Suspense>
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu />
      },
      {
        path : "/instamart",
        element : <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);