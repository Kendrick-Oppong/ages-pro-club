import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "@/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  BackgroundImage,
  CustomButton,
  CustomInput,
  EraseAlertDialog,
  PersonalCustomSelectOption,
} from "@/components/shared";
import { useDispatch, useSelector } from "react-redux";
import {
  getPersonalDetails,
  storePersonalDetails,
} from "@/redux/personalDetailSlice";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { transition } from "@/framer";
import { useTitle } from "@/hooks";

export function PersonalInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personalDetailsData = useSelector(getPersonalDetails);
  const { FirstName, LastName, Email, PhoneNumber, Address, Gender } =
    personalDetailsData;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Address,
      Gender,
    },
  });
  const { control, handleSubmit, formState, reset } = form;

  useTitle("Personal Details");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(storePersonalDetails(data));

    navigate("/bootcamp");
  }

  return (
    <main className="relative p-5 sm:p-10 ">
      <div className=" relative border border-textPrimary rounded-xl pb-16">
        <BackgroundImage />
        <div className="max-w-5xl mx-auto text-md">
          <h1 className="text-2xl text-center italic font-bold py-8">
            Personal Details
          </h1>
        </div>
        <Form {...form}>
          <form className="px-5 sm:px-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:grid grid-cols-2 sm:gap-6 mb-7">
              <FormField
                control={control}
                name="FirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <CustomInput
                        placeholder="Enter first name"
                        fieldProps={field}
                        formState={formState}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="LastName"
                render={({ field }) => (
                  <FormItem className="mt-2 sm:mt-0">
                    <FormLabel>Other name(s)</FormLabel>
                    <FormControl>
                      <CustomInput
                        placeholder="Enter other name(s)"
                        fieldProps={field}
                        formState={formState}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-7">
              <FormField
                control={control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <CustomInput
                        placeholder="Enter email"
                        fieldProps={field}
                        formState={formState}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:grid grid-cols-2 sm:gap-6 mb-7">
              <FormField
                control={control}
                name="PhoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <CustomInput
                        placeholder="05463..."
                        fieldProps={field}
                        formState={formState}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="Address"
                render={({ field }) => (
                  <FormItem className="mt-2 sm:mt-0">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <CustomInput
                        placeholder="Tell us where you stay"
                        fieldProps={field}
                        formState={formState}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-4 mb-7">
              <FormField
                control={control}
                name="Gender"
                defaultValue=""
                render={({ field }) => (
                  <PersonalCustomSelectOption
                    fieldProps={field}
                    formState={formState}
                    onValueChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </div>
            <div className="flex justify-center gap-5 flex-wrap">
              <Link to="/">
                <CustomButton title="Previous" type="button" direction="left">
                  <ArrowLeft className="mr-2" />
                </CustomButton>
              </Link>

              {formState.isDirty && (
                <EraseAlertDialog about="personal-details" reset={reset} />
              )}
              <CustomButton
                title="Next"
                type="submit"
                disabled={formState.isValid}
              >
                <ArrowRight />
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}

const PersonalInformationWithTransition = transition(PersonalInformation);

export { PersonalInformationWithTransition };
