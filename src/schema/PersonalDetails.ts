import * as z from "zod";

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
 export const FormSchema = z.object({
  FirstName: z.string().trim().min(2, {
    message: "Value must be at least 2 characters.",
  }),
  LastName: z.string().trim().min(2, {
    message: "Value must be at least 2 characters.",
  }),
  Email: z
    .string()
    .min(4, { message: "This field has to be filled." })
    .email({ message: "Please enter a valid email address." })
    .trim()
    .refine((value) => emailRegex.test(value), {
      message: "Invalid email address",
    }),
  Address: z
    .string()
    .trim()
    .min(2, { message: "Value must be at least 2 characters" })
    .max(255),
  PhoneNumber: z
    .string({ invalid_type_error: "Value must be numeric" })
    .trim()
    .min(10, { message: "Invalid number format" })
    .max(10, { message: "Characters exceeds 10" })
    .refine((value) => /^\+?[0-9]+$/i.test(value) && value.length >= 10, {
      message: "Invalid phone number",
    }),
  Gender: z
    .string({ required_error: "Please select your gender" })
    .min(1, { message: "Please select your gender" }),
});
