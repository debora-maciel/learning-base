import { ReactNode } from "react";
import { useAppSelector } from "./hooks/useAppDispatch";
import Login from "./auth/pages/Login";

interface IProps {
  children: ReactNode;
}

export default function Template({ children }: IProps) {
  const auth = useAppSelector((state) => state.user);

  console.log(auth);


  return  auth.isLoggedIn ? 
   <div className="w-full h-screen ">{children}</div>
   :
   <Login/>;
}
