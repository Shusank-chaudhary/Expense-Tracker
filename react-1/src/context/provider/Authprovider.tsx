import { useEffect, useState, type ReactNode } from "react"
import AuthContext, { type IUser } from "../AuthContext"
import type { ICredentials } from "../../types/authType"
import axiosInstance from "../../config/axiosConfig"
import Cookies from "js-cookie"
import { Spinner } from "../../component/ui/Loading"

const AuthProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [loggedInUser, setLoggedInUser] = useState<IUser>()
  const [loading, setLoading] = useState<boolean>(() => Boolean(Cookies.get("_at7")));

  const loginUser = async (data: ICredentials): Promise<IUser> => {
    const response = await axiosInstance.post("/auth/login", data);

    Cookies.set("_at7", response.data.data, {
      expires: 3 / 24,
    });

    return await getLoggedInUser()
  };

  const getLoggedInUser = async (): Promise<IUser> => {
    try {
      const userDetail = await axiosInstance.get("/auth/me");

      setLoggedInUser(userDetail.data.data);

      return userDetail.data.data as IUser;
    }
    finally {
      setLoading(false)
    }
  }

  const logoutUser = (): void => {
  Cookies.remove("_at7");
  setLoggedInUser(undefined);
};

  useEffect(() => {
    const token = Cookies.get("_at7");

    if (token) {
      getLoggedInUser();
    }
  }, [])

  return loading ? (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <Spinner size={"size-20"} />
      </div>
    </div>
  ) : (
    <AuthContext.Provider
      value={{
        login: loginUser,
        getLoggedInUser: getLoggedInUser,
        loggedInUser: loggedInUser,
        setLoggedInUser: setLoggedInUser,
        logout: logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider


// import { useEffect, useState, type ReactNode } from "react";
// import AuthContext, { type IUser } from "../AuthContext";
// import type { ICredentials } from "../../types/authType";
// import axiosInstance from "../../config/axiosConfig";
// import Cookies from "js-cookie";
// import { Spinner } from "../../component/ui/Loading";

// const AuthProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
//   const [loggedInUser, setLoggedInUser] = useState<IUser>();
//   const [loading, setLoading] = useState<boolean>(true);

//   const loginUser = async (data: ICredentials): Promise<IUser> => {
//     console.log("1. Sending login request:", data);

//     const response = await axiosInstance.post("/auth/login", data);

//     console.log("2. Login response received:", response.data);

//     Cookies.set("_at7", response.data.data, {
//       expires: 3 / 24,
//     });

//     console.log("3. Token saved");

//     const user = await getLoggedInUser();

//     console.log("4. User profile received:", user);

//     return user;
//   };

//   const getLoggedInUser = async (): Promise<IUser> => {
//     try {
//       console.log("5. Sending /auth/me request");

//       const userDetail = await axiosInstance.get("/auth/me");

//       console.log("6. /auth/me response:", userDetail.data);

//       setLoggedInUser(userDetail.data.data);

//       return userDetail.data.data as IUser;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const token = Cookies.get("_at7");

//     if (token) {
//       getLoggedInUser();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   return loading ? (
//     <div className="flex w-full h-screen items-center justify-center">
//       <div className="flex flex-col items-center">
//         <Spinner size={"size-20"} />
//       </div>
//     </div>
//   ) : (
//     <AuthContext.Provider
//       value={{
//         login: loginUser,
//         getLoggedInUser: getLoggedInUser,
//         loggedInUser: loggedInUser,
//         setLoggedInUser: setLoggedInUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;