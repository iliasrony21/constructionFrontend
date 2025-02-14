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
import RequireAuth from "../components/Common/RequireAuth";
import {default as ShowService} from "../components/Backend/Services/Show";
import AdminDashboard from "../components/Backend/Login/Dashboard/AdminDashboard";
import {default as CreateService} from "../components/Backend/Services/create";


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
          path: "/admin",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
          errorElement: <Page404 />,
          children: [
            { path: "services", element: (<RequireAuth><ShowService/></RequireAuth>  )},
            { path: "services/create", element: (<RequireAuth><CreateService/></RequireAuth>  )},
            { path: "dashboard", element: (<RequireAuth><AdminDashboard/></RequireAuth>  )},
            { path: "settings", element: <div>Settings Page</div> }, // Placeholder for settings
          ],
        },
        // {
        //   path: "/dashboard",
        //   element: (
        //     <RequireAuth>
        //       <Dashboard />
        //     </RequireAuth>
        //   ),
        //   errorElement: <Page404 />,
        // },
        // {
        //   path: "admin/services",
        //   element: (
        //     <RequireAuth>
        //       <Show />
        //     </RequireAuth>
        //   ),
        //   errorElement: <Page404 />,
        // },
      ]);



      export default router;