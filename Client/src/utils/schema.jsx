import { z } from "zod";
export const userSchema = z.object({
  name: z
    .string()
    .max(30, "Name must be less than 30 charactor")
    .min(2, "Name must be more than 2 charactor"),
  lastname: z
    .string()
    .max(30, "Lastname must be less than 30 charactor")
    .min(2, "Lastname must be more than 2 charactor"),
  image: z
    .any()
    .refine(
      (val) =>
        val !== undefined &&
        val.public_id !== undefined &&
        val.public_id.trim() !== "",
      {
        message: "Please enter a valid picture.",
      }
    ),
});

export const postSchema = z.object({
  description: z
    .string()
    .max(1000, "Description must be less than 1000 charactor")
    .min(2, "Description must be more than 2 charactor"),
  image: z
    .any()
    .refine(
      (val) =>
        val !== undefined &&
        val.public_id !== undefined &&
        val.public_id.trim() !== "",
      {
        message: "Please enter a valid picture.",
      }
    ),
});
