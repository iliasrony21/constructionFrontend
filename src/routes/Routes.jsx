import { createBrowserRouter } from "react-router-dom";

import Main from "../components/frontend/MainFrontend/Main";
import Home from "../components/frontend/home/Home";
import About from "../components/frontend/About/About";
import Services from "../components/frontend/Services/Services";
import Blogs from "../components/frontend/Blogs/Blogs";
import OurProjects from "../components/frontend/OurProject/OurProjects";
import ContactUs from "../components/frontend/ContactUs/ContactUs";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children :[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about-us',
                element:<About></About>,
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>,
            },
            {
                path:'/our-projects',
                element:<OurProjects></OurProjects>,
            },
            {
                path:'/contact-us',
                element:<ContactUs></ContactUs>,
            },
          ]
        },
      ]);



      export default router;