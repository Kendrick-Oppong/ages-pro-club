import * as z from "zod";


export const ProClub = z.object({
  Programme: z.string().trim().min(4, {
    message: "Value must be at least 4 characters.",
  }),
  Year: z
    .string({ required_error: "Selection required" })
    .min(1, { message: "Please select a level" }),
  Experience: z
    .string({ required_error: "Selection required" })
    .min(1, { message: "Please select your experience level" }),
  Club: z
    .string({ required_error: "Selection required" })
    .min(1, { message: "Please select an option" }),
  Heard: z
    .string()
    .trim()
    .min(5, { message: "Value must be at least 5 characters" })
    .max(255),
  Expectation: z
    .string()
    .trim()
    .min(5, { message: "Value must be at least 5 characters" })
    .max(255),
});
