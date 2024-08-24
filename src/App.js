import React from "react";
import Data from "./components/projectindex";
import {  Outlet, createBrowserRouter} from "react-router-dom";
import Breakfast from "./components/recipe";
import Meat from "./components/meat";
import Vegan from "./components/vegan";
import Dessert from "./components/dessert";
import Lunch from "./components/lunch";
import Chocolate from "./components/chocolate";
function App() {
  return (
   <>
   <Outlet/>
   
   </>
  );
}

const Routerrrr =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Data/>
      },
      {
        path:"/breakfast",
        element:<Breakfast/>
      },
      {
        path:"/meat",
        element:<Meat/>
      },{
        path:"/vegan",
        element:<Vegan/>
      },{
        path:"/dessert",
        element:<Dessert/>
      },{
        path:"/lunch",
        element:<Lunch/>
      },{
        path:"/chocolate",
        element:<Chocolate/>
      }
    ]
  }
])


export default Routerrrr;
