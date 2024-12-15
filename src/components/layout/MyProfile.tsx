import React from "react";
import { User } from "lucide-react";
import { Button } from "../ui/button";

const MyProfile: React.FC = () => {
  return (
    <Button
      variant="outline"
      className="flex items-center space-x-2 p-2 rounded hover:border-none"
      onClick={() => alert("Navigating to My Account")}
      aria-label="My Account"
    >
      <User className="w-5 h-5" />
      <span>My Account</span>
    </Button>
  );
};

export default MyProfile;
