import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { Heart, HeartOff, RotateCw } from "lucide-react";

export const CardSubmitButton = ({ isPending, isFavorite }) => {
  return (
    <div className="">
      <Button variant="outline">
        {isPending ? (
          <RotateCw className="animate-spin" />
        ) : isFavorite ? (
          <Heart className="text-red-500" />
        ) : (
          <HeartOff className="text-gray-500" />
        )}
        {isFavorite ? "Favorite" : "UnFavorite"}
      </Button>
    </div>
  );
};
export const CardSignInButton = () => {
  return (
    <div className="">
      <SignInButton mode="modal">
        <Button variant="outline">
          <HeartOff className="text-gray-500" />
          Login Please
        </Button>
      </SignInButton>
    </div>
  );
};
