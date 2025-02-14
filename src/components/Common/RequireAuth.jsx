import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Backend/Context/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const storedUserInfo = localStorage.getItem("userInfo");

      if (!storedUserInfo) {
        logout();
        setLoading(false);
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUserInfo);

        // ✅ Check if user is valid and has the correct token
        if (parsedUser?.token) {
          if (!user || user.token !== parsedUser.token) {
            login(parsedUser); // Restore session
          }
        } else {
          logout();
        }
      } catch (error) {
        console.error("Error parsing userInfo:", error);
        logout();
      }

      setLoading(false);
    };

    checkAuth();

    // ✅ Actively check for token tampering in localStorage
    const handleStorageChange = (event) => {
      if (event.key === "userInfo") {
        const newStoredUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
        
        if (!newStoredUser.token || (user && user.token !== newStoredUser.token)) {
          logout(); // 🚨 If token is changed manually, force logout!
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [user, login, logout]);

  if (loading) {
    return <div>Loading...</div>; // ✅ Prevents redirect before checking auth
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default RequireAuth;