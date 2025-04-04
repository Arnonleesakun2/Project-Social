import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { useAuth } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import FormUploadFile from "@/components/form/FormUploadFile";
import { postSchema } from "../../../utils/schema";
import { RotateCw } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostStore from "@/stores/post-store";
import { toast } from "sonner";

const AddPost = () => {
  const { getToken } = useAuth();
  const { register, handleSubmit, setValue, formState, reset } = useForm({
    resolver: zodResolver(postSchema),
  });
  const { isSubmitting, errors } = formState;
  const actionCreatePost = usePostStore((state) => state.actionCreatePost);

  const hdlSumbit = async (data) => {
    try {
      await new Promise((resoLve) => setTimeout(resoLve, 3000));
      const token = await getToken();
      await actionCreatePost(token, data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="flex justify-between items-center">
      <div className="text-2xl font-bold ">Posts</div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Add Post</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create Post</SheetTitle>
            <SheetDescription>
              Make your post here. Click Create Post when you're done.
            </SheetDescription>
            <form
              onSubmit={handleSubmit(hdlSumbit)}
              className="mt-4 flex flex-col gap-2"
            >
              <FormUploadFile setValue={setValue} errors={errors} />
              <FormInput
                name="description"
                register={register}
                type="text"
                errors={errors}
              />
              <Button className="mt-4 cursor-pointer">
                {isSubmitting ? (
                  <>
                    <RotateCw className="animate-spin" />
                    <span>Please wait...</span>
                  </>
                ) : (
                  <p>Create Post</p>
                )}
              </Button>
            </form>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default AddPost;
