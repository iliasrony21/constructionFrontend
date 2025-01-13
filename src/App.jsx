
import router from './routes/Routes'
import './assets/css/style.scss'
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
 
    </>
  )
}

export default App
