import { CustomTextAreaProps } from "@/types/InputTypes";
import { FormItem, FormControl, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

export const CustomTextArea = ({
  children,
  fieldProps,
  formState,
}: CustomTextAreaProps) => {
  const { name } = fieldProps;
  

  const isError = formState.errors[name] && formState.errors[name]?.message;
  return (
    <FormItem className="mt-3 sm:mt-0">
      {children}
      <FormControl>
        <Textarea
          placeholder="Tell us something..."
          className={`resize-none bg-inputBackground ${
            isError ? "!border-red-500" : ""
          } `}
          {...fieldProps}
        />
      </FormControl>

      <FormMessage />
    </FormItem>
  );
};
