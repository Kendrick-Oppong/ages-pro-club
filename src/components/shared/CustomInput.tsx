import { Input } from "@/components/ui/input";
import { CustomInputProps } from "@/types/InputTypes";

export function CustomInput({
  placeholder,
  fieldProps,
  formState,
}: Readonly<CustomInputProps>) {
  const { name } = fieldProps;

  const isError = formState?.errors[name] && formState.errors[name]?.message;
 
  return (
    <div className="grid w-full !mt-0 items-center gap-1.5">
      <Input
        placeholder={placeholder}
        {...fieldProps}
        className={`p-5 ${
          isError ? "!border-red-500" : ""
        }  border-[#000] outline-none focus-visible:border  focus-visible:outline-none focus:border-none bg-inputBackground`}
      />
    </div>
  );
}
