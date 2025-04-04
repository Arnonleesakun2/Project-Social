import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../utils/schema";
import { useAuth } from "@clerk/clerk-react";
import { createUser } from "@/api/user";
import FormUploadFile from "@/components/form/FormUploadFile";
import { RotateCw } from "lucide-react";
import { toast } from "sonner"

const User = () => {
  const { register, handleSubmit, formState, setValue, reset } = useForm({
    resolver: zodResolver(userSchema),
  });
  const { errors, isSubmitting } = formState;
  const { getToken } = useAuth();
  const hdlsubmit = async (data) => {
    await new Promise((resoLve) => setTimeout(resoLve, 3000));
    const token = await getToken();
    createUser(token,data)
      .then((res) => {
        reset();
        toast.success(res.data.msg,{
          position: "bottom-left",
        })
      })
      .catch((err) => {
        toast.error(err,{
          position: "bottom-left",
        })
      });
  };
  return (
    <main>
      <h2 className="text-2xl font-bold mt-4">Create User</h2>
      <form onSubmit={handleSubmit(hdlsubmit)}>
        <section className="mt-4 grid md:grid-cols-2 gap-5">
          <FormInput
            name="name"
            type="text"
            register={register}
            errors={errors}
          />
          <FormInput
            name="lastname"
            type="text"
            register={register}
            errors={errors}
          />
          <FormUploadFile  setValue={setValue} errors={errors} />
        </section>
        <div className="mt-6 flex justify-center">
          <Button variant="outline">
            {isSubmitting ? (
              <>
                <RotateCw className="animate-spin" />
                <span>Please wait...</span>
              </>
            ) : (
              <p>Create User</p>
            )}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default User;
