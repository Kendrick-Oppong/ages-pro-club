import {
  ControllerRenderProps,
  UseFormReset,
  UseFormStateReturn,
} from "react-hook-form";

export interface InputFieldProps {
  htmlFor?: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

export interface PersonalCustomSelectOptionProps {
  onValueChange: () => void;
  value: string;
  fieldProps: ControllerRenderProps<TFieldValues, TName>;
  formState: UseFormStateReturn<TFieldValues>;
}

export interface ProClubCustomSelectProps {
  label?: string;
  children: React.ReactNode;
  value: string;

  formState: UseFormStateReturn<TFieldValues>;
  fieldProps: ControllerRenderProps<TFieldValues, TName>;
  onValueChange: () => void;
  placeholder?: string;
}

export interface CustomTextAreaProps {
  children: React.ReactNode;
  fieldProps: ControllerRenderProps<TFieldValues, TName>;
  formState: UseFormStateReturn<TFieldValues>;
}

export interface CustomInputProps {
  placeholder: string;
  fieldProps: ControllerRenderProps<TFieldValues, TName>;
  formState: UseFormStateReturn<TFieldValues>;
}

export interface CustomButtonProps {
  title: string;
  width?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onSubmit?: () => void;
  direction?: string;
  verified?: null | boolean | undefined | undefined ;
  type?: "submit" | "reset" | "button";
  errorMessage?: string;
}

//local storage

export type PersonalDetails = {
  FirstName: string;
  LastName: string;
  Email: string;
  Address: string;
  PhoneNumber: string;
  Gender: string;
};

export type BootcampDetails = {
  Programme: string;
  Year: string;
  Experience: string;
  Club: string;
  Heard: string;
  Expectation: string;
};

// Define a union type for the form data
export type FormData = PersonalDetails | BootcampDetails;

// Define a union type for the reset function
export type FormReset =
  | UseFormReset<PersonalDetails>
  | UseFormReset<BootcampDetails>;
