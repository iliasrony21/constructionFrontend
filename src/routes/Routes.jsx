import { createBrowserRouter } from "react-router-dom";

import Main from "../components/frontend/MainFrontend/Main";
import Home from "../components/frontend/home/Home";
import About from "../components/frontend/About/About";
import Services from "../components/frontend/Services/Services";
import Blogs from "../components/frontend/Blogs/Blogs";
import OurProjects from "../components/frontend/OurProject/OurProjects";
import ContactUs from "../components/frontend/ContactUs/ContactUs";
import Login from "../components/Backend/Login/Login";
import Page404 from "../components/Common/Page404";
import Dashboard from "../components/Backend/Login/Dashboard/Dashboard";
import AboutUs from "../components/frontend/About/About";
import RequireAuth from "../components/Common/RequireAuth";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <Page404 />,
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
            {
                path:'/admin/login',
                element:<Login></Login>,
            },
          ]
        },
        {
          path: "/dashboard",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
          errorElement: <Page404 />,
          children: [
            { path: "user", element: <div>User Page</div> },
            { path: "settings", element: <div>Settings Page</div> }, // Placeholder for settings
          ],
        },
      ]);



      export default router;