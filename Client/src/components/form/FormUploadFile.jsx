import { useState } from "react";
import { resizeImage } from "../../utils/resizeimage";
import { useAuth } from "@clerk/clerk-react";
import { RotateCw } from "lucide-react";
import { Input } from "../ui/input";
import { uploadImage } from "@/api/uploadfile";
import { toast } from "sonner";

const FormUploadFile = ({ setValue, errors }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();
  const hdlOnchange = async (e) => {
    setIsLoading(true);
    const token = await getToken();
    const file = e.target.files[0];
    if (!file) return;
    try {
      const resizedImage = await resizeImage(file);
      const res = await uploadImage(token, resizedImage);
      setValue("image", res.data.result);
      setIsLoading(false);
      toast.success(res.data.message,{
        position: "bottom-left",
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error("Somthing Wrong",{
        position: "bottom-left",
      });
    }
  };
  return (
    <div className="">
      <p className="capitalize">pick a file</p>
      <div className="flex items-center gap-2">
        <Input
          type="file"
          className="file-input w-full"
          onChange={hdlOnchange}
        />
        {isLoading && <RotateCw className="animate-spin" />}
      </div>
      {errors.image && (
        <p className="text-red-400 text-sm mt-1">{errors.image.message}</p>
      )}
    </div>
  );
};

export default FormUploadFile;
