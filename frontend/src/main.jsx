import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Component/Root";
import Home from "./Component/Main/Home";
import Login from "./Component/Main/Login/Login";
import Register from "./Component/Main/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import AllArtCrafitem from "./Component/Main/AllArtCrafItem/AllArtCrafitem";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddCraftItem from "./Component/Main/AddCraftItem/AddCraftItem";
import CardFullDetails from "./Component/Main/AllArtCrafItem/CardFullDetails";
import AboutUs from "./Component/Main/AboutUs/AboutUs";
import MyArtCraftList from "./Component/Main/MyArt&CraftList/MyArtCraftList";
import Update from "./Component/Main/MyArt&CraftList/Update";
import Profile from "./Component/Main/Profile/Profile";
import AddToCartAndBuy from "./Component/Main/AllArtCrafItem/Cart/AddToCartAndBuy";
import SubcatagoryFilter from "./Component/Main/HOmeCatagories/SubcatagoryFilter";
import Dashboard from "./Component/Main/Dashboard/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Dashboard></Dashboard>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/rgister',
        element: <Register></Register>
      },
      {
        path: '/allArtCraftItem',
        element: <AllArtCrafitem></AllArtCrafitem>,
        loader: () => fetch('https://assignment-ten-crud.vercel.app/users')
      },

      {
        path: '/addcraftitem',
        element: <PrivateRoute>
          <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path: '/ceramicsDetails/:cardDataId',
        element: <PrivateRoute>
          <CardFullDetails></CardFullDetails>,
        </PrivateRoute>
      },
      {
        path: '/MyArt&CraftList',
        element: <PrivateRoute>
          <MyArtCraftList></MyArtCraftList>
        </PrivateRoute>,
        
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/update/:updateId',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-ten-crud.vercel.app/users/${params.updateId}`)
        // http://localhost:5000/users/${params.updateId}
      },
      {
        path: "/profile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>

      },
      {
        path: "/cart/:id",
        element: <AddToCartAndBuy></AddToCartAndBuy>,
        loader: ({ params }) => fetch(`https://assignment-ten-crud.vercel.app/users/${params.id}`)
      },
      {
        path: "/catagory/:subcatagory",
        element: <SubcatagoryFilter></SubcatagoryFilter>
      
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
); 
