import { Article } from "@phosphor-icons/react";
import { selectUser } from "../../auth/store/user/userSlice";
import { useAppSelector } from "../../hooks/useAppDispatch";
import img from "./../../assets/icon.png";
import { useEffect } from "react";
import SwipeableTemporaryDrawer from "./SideMenu";
import { IconButton } from "@mui/material";

export default function NavBar() {
  const user = useAppSelector(selectUser);

  useEffect(() => {
    console.log(user)
  }, []);

  return (
    <div className="w-full p-2 flex items-center justify-between">
      <img className="w-16" src={img} />
      <div className="flex text-sm items-center justify-center gap-2">
        <SwipeableTemporaryDrawer />
        <IconButton>
          <Article size={24} />
        </IconButton>
        {/* {user.login} */}
      </div>
    </div>
  );
}
