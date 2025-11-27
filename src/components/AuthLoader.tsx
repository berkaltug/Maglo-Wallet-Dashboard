import React, { useEffect, type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getProfile, refreshAccessToken } from "../services/userService";
import { finishLoading, refreshToken, setUser } from "../redux/userSlice";
import LoadingSVG from "../assets/loading.svg";

interface AuthLoaderProps {
    children: ReactNode
}
const AuthLoader:React.FC<AuthLoaderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Bu istek, tarayıcıda kayıtlı olan HTTP-Only refreshToken çerezini otomatik olarak taşır.
        const newToken = await refreshAccessToken();
        dispatch(refreshToken(newToken));
        const userProfile = await getProfile();
        dispatch(setUser(userProfile));
      } catch {
        // Başarısız: refreshToken süresi doldu veya yok. Oturum açılamadı.
        // logOut çağrısı yapmaya gerek yok, initialState zaten temiz.
        dispatch(finishLoading());
      }
    };

    // Eğer uygulama henüz yüklenmediyse (sayfa yenilendi) kontrolü yap.
    if (isLoading) {
      checkAuthStatus();
    }
  }, [dispatch, isLoading]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
        <img src={LoadingSVG} className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthLoader;
