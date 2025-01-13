import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_LOGIN_PATH, APP_PROFILE_PATH } from "@/router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "@/services/auth.service";
import { useAuth } from "@/lib/auth-util";
import { toast } from "@/hooks/use-toast";

const MyProfile: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || ({} as any));
  const avatarUrl = user.avatar;
  const name = user.username.substring(0, 2).toUpperCase();
  const { logoutUser } = useAuth();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar style={{ cursor: "pointer" }}>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => navigate(APP_PROFILE_PATH)}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              logout();
              logoutUser();
              toast({
                description: "Logout successfully.",
              });
              navigate(APP_LOGIN_PATH);
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyProfile;
