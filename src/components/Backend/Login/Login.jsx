import { useContext } from "react";
import { useForm} from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/Auth";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const isAuthenticated = localStorage.getItem("userInfo");

  if (isAuthenticated) {
      return <Navigate to="/admin/dashboard" />;
  }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/authenticate', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await res.json();
          // console.log(result);
      
          if (result.status === "false") {
            toast.error(result.message || "Authentication failed!");
          } else {
            const userInfo ={
              id:result.id,
              user:result.user,
              token:result.token,
            }
            localStorage.setItem('userInfo',JSON.stringify(userInfo));
            login(userInfo);
            navigate('/admin/dashboard');
            toast.success('Login successful!');
          }
        } catch (error) {
          console.error(error);
          toast.error('Something went wrong. Please try again.');
        }
      };
    
    //   console.log(watch("example")) 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {
                ...register('email',{
                    required:'This Email Field is Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                    }
                  })
               }
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          
            />
            {
                errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>
            }
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
             {
                ...register('password',{
                    required:'This Password Field is Required'
                  })
               }
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

{
                errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>
            }
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Do not have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
