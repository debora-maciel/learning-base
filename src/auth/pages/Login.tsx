import { Button, TextField } from "@mui/material";
import img from "./../../assets/icon.png";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { signIn } from "../store/user/userSlice";
import { useState } from "react";

export default function Login() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<{ user: string }>();

  function onLogin() {
    if (user)
      dispatch(
        signIn({
          isLoggedIn: true,
          login: user?.user,
          session: user?.user,
        })
      );
  }

  return (
    <div className="w-screen bg-slate-200 h-screen flex items-center justify-center">
      <div className="rounded w-[300px] h-[420px] bg-white shadow-md flex flex-col gap-6 p-6">
        <div className="w-full flex items-center justify-center flex-col">
          <img className=" shadow-lg rounded w-16 bg-blue-500" src={img} />
          <p className="text-xs mt-2">Learning Base</p>
          <p className={"font-bold text-xl mt-4"}>Login</p>
        </div>
        <div className="flex flex-col gap-1">
          <TextField
            onChange={(ev) => setUser({ user: ev.target.value })}
            size={"small"}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextField
            size={"small"}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Button onClick={onLogin} fullWidth variant="contained">
            login
          </Button>
        </div>
      </div>
    </div>
  );
}
