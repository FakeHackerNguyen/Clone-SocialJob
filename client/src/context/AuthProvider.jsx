/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getIsAuth, signInUser } from "../apis/auth";
import { useNotification } from "../hooks";

export const AuthContext = createContext();

const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

export default function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });
  const { updateNotification } = useNotification();

  const navigate = useNavigate();

  const handleLogin = async function (email, password) {
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await signInUser({ email, password });
    if (error) {
      updateNotification("error", error);
      return setAuthInfo({ ...authInfo, isPending: false, error });
    }

    navigate("/feed", { replace: true });
    setAuthInfo({
      profile: { ...user },
      isPending: false,
      isLoggedIn: true,
      error: "",
    });

    localStorage.setItem("auth-token", user.token);
  };

  const isAuth = async function () {
    const token = localStorage.getItem("auth-token");
    if (!token) return;

    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await getIsAuth(token);
    if (error) {
      updateNotification("error", error);
      return setAuthInfo({ ...authInfo, isPending: false, error });
    }

    setAuthInfo({
      profile: { ...user },
      isPending: false,
      isLoggedIn: true,
      error: "",
    });
  };

  const handleLogout = function () {
    localStorage.removeItem("auth-token");
    setAuthInfo({ ...defaultAuthInfo });
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authInfo, handleLogin, handleLogout, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
