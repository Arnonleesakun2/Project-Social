import { useAuth, useUser } from "@clerk/clerk-react";
import { CardSignInButton, CardSubmitButton } from "./ButtonAddroRemove";
import usePostStore from "@/stores/post-store";
import { useForm } from "react-hook-form";

const FavoriteToggleButton = ({ postId, isFavorite }) => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const { getToken,isSignedIn } = useAuth();
  const actionAddorRemoveFavorite = usePostStore(
    (state) => state.actionAddorRemoveFavorite
  );
  const hdlSubmit = async () => {
    await new Promise((resoLve) => setTimeout(resoLve, 2000));
    const token = await getToken();
    const res = await actionAddorRemoveFavorite(token, { postId, isFavorite });
  };
  if(!isSignedIn){
    return <CardSignInButton/>
  }
  return (
    <form onSubmit={handleSubmit(hdlSubmit)}>
      <CardSubmitButton isFavorite={isFavorite} isPending={isSubmitting} />
    </form>
  );
};

export default FavoriteToggleButton;
