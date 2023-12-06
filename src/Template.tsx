import { ReactNode } from "react";
import { useAppSelector } from "./hooks/useAppDispatch";
import Login from "./auth/pages/Login";
import { selectUser } from "./auth/store/user/userSlice";

interface IProps {
  children: ReactNode;
}

export default function Template({ children }: IProps) {
  const auth = useAppSelector(selectUser);

  console.log(auth);


  return  auth.isLoggedIn ? 
   <div className="w-full h-screen ">{children}</div>
   :
   <Login/>;
}
