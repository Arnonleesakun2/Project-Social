import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/clerk-react";
import ProfileImg from "./ProfileImg";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <ProfileImg />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2">
        <DropdownMenuLabel>My Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to="/">
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
        <SignedOut>
          <SignInButton mode="modal">
            <DropdownMenuItem>Login</DropdownMenuItem>
          </SignInButton>
          <SignUpButton mode="modal">
            <DropdownMenuItem>Register</DropdownMenuItem>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link to="/user/createuser">
            <DropdownMenuItem>Create User</DropdownMenuItem>
          </Link>
          <SignOutButton>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </SignOutButton>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
