import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ProClubCustomSelectProps } from "@/types/InputTypes";

export const ProClubCustomSelect = ({
  onValueChange,
  placeholder,
  label,
  children,
  value,
  fieldProps,
  formState,
}: ProClubCustomSelectProps) => {
  const { name } = fieldProps;
  const isError = formState.errors[name] && formState.errors[name]?.message;

  return (
    <FormItem className="mt-4 sm:mt-0 ">
      <FormLabel>{label ?? "Year of student"}</FormLabel>
      <Select onValueChange={onValueChange} value={value}>
        <FormControl>
          <SelectTrigger
            className={`${
              isError ? "!border-red-500" : ""
            }   w-full !mt-0 border-[#000] bg-inputBackground `}
          >
            <SelectValue placeholder={placeholder ?? "Select Year"} />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="bg-[#f3f1f1] ">{children}</SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};
