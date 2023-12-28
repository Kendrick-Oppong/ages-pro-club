import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { PersonalCustomSelectOptionProps } from "@/types/InputTypes";

export function PersonalCustomSelectOption({
  onValueChange,
  value,
  fieldProps,
  formState,
}: Readonly<PersonalCustomSelectOptionProps>) {
  const { name } = fieldProps;
  const isError = formState.errors[name] && formState.errors[name]?.message;

  return (
    <FormItem>
      <FormLabel>Gender</FormLabel>
      <Select onValueChange={onValueChange} value={value}>
        <FormControl>
          <SelectTrigger
            className={`${
              isError ? "!border-red-500" : ""
            }  w-full !mt-0 border-[#000] bg-inputBackground`}
          >
            <SelectValue placeholder="Select Gender" className="" />
          </SelectTrigger>
        </FormControl>

        <SelectContent className="bg-[#f3f1f1] ">
          <SelectItem value="Male" className="focus:bg-ring ">
            Male
          </SelectItem>
          <SelectItem value="Female" className="focus:bg-ring">
            Female
          </SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
