import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInput = ({ name, register, type, errors }) => {
  return (
    <div>
      <Label className="mb-2 capitalize">{name}</Label>
      <Input {...register(name)} type={type} placeholder={name} />
      {errors[name] && (
        <p className="text-red-400 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInput;
