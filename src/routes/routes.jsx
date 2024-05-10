
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ReactTabs from "../pages/Home/Tabs/ReactTabs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Error from "../pages/Error/Error";
import MainServices from "../pages/Home/MainServices/MainServices";
import TourGide from "../pages/Home/MainServices/TourGide/TourGide";
import Transportation from "../pages/Home/MainServices/Transportation/Transportation";
import LocalFoods from "../pages/Home/TopServices/LocalFood/LocalFoods";
import TopServices from "../pages/Home/TopServices/TopServices";
import StayVillageContainer from "../pages/Home/TopServices/StayVillage/StayVillageContainer";
import FestivalContainer from "../pages/Home/TopServices/FestivalContainer/FestivalContainer";
import DishesContainer from "../pages/Home/TopServices/DishesContainer/DishesContainer";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Payment from "../pages/Dashboard/Payment/Payment";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/service',
          element:<TopServices></TopServices>
        },
        {
          path:'/mainServices',
          element:<MainServices></MainServices>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path : 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/serviceDetails',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path:'/locations',
          element:<PrivateRoute><ReactTabs></ReactTabs></PrivateRoute>
        },
        {
          path: '/tourGides',
          element:<TourGide></TourGide>
        },
        {
          path: '/transports',
          element:<Transportation></Transportation>
        },
        {
          path: '/foods',
          element:<LocalFoods></LocalFoods>
        },
        {
          path:'/stay',
          element:<StayVillageContainer></StayVillageContainer>
        },
        {
          path:'/festival',
          element: <FestivalContainer></FestivalContainer>
        },
        {
          path : '/dishes',
          element: <DishesContainer></DishesContainer>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }
      ]
    }
  ]);