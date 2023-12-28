import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProClub } from "@/schema";

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
  CustomTextArea,
  EraseAlertDialog,
} from "@/components/shared";
import { SelectItem } from "@/components/ui/select";
import { ProClubCustomSelect } from "@/components/shared/ProClubCustomSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  getBootcampDetails,
  storeBootcampDetails,
} from "@/redux/bootCampSlice";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { transition } from "@/framer";
import { useTitle } from "@/hooks";

export function Bootcamp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bootcampDetailsData = useSelector(getBootcampDetails);
  const { Programme, Year, Experience, Club, Heard, Expectation } =
    bootcampDetailsData;

  const form = useForm<z.infer<typeof ProClub>>({
    resolver: zodResolver(ProClub),
    defaultValues: {
      Programme,
      Year,
      Experience,
      Club,
      Heard,
      Expectation,
    },
  });

  useTitle("Pro-Club");

  const { control, handleSubmit, formState, reset } = form;

  function onSubmit(data: z.infer<typeof ProClub>) {
    dispatch(storeBootcampDetails(data));
    navigate("/overview");
  }

  return (
    <main className="relative p-5 sm:p-10">
      <div className="relative border border-textPrimary rounded-xl pb-16">
        <BackgroundImage />
        <div className="max-w-5xl mx-auto text-md">
          <h1 className="text-2xl text-center italic font-bold py-8">
            Pro-Club Details
          </h1>
        </div>
        <Form {...form}>
          <form
            className="px-5 sm:px-10"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="md:grid grid-cols-2 sm:gap-6 mb-7">
              <FormField
                control={control}
                name="Programme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Programme(Course)</FormLabel>
                    <FormControl>
                      <CustomInput
                        placeholder="Enter your course name"
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
                name="Year"
                render={({ field }) => (
                  <ProClubCustomSelect
                    fieldProps={field}
                    formState={formState}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectItem value="100" className="focus:bg-ring ">
                      100
                    </SelectItem>
                    <SelectItem value="200" className="focus:bg-ring">
                      200
                    </SelectItem>
                    <SelectItem value="300" className="focus:bg-ring">
                      300
                    </SelectItem>
                    <SelectItem value="400" className="focus:bg-ring">
                      400
                    </SelectItem>
                  </ProClubCustomSelect>
                )}
              />
            </div>
            <div className="md:grid grid-cols-2 sm:gap-6 mb-7">
              <FormField
                control={control}
                name="Experience"
                render={({ field }) => (
                  <ProClubCustomSelect
                    fieldProps={field}
                    formState={formState}
                    onValueChange={field.onChange}
                    value={field.value}
                    label="Level of coding experience"
                    placeholder="Please select your experience level"
                  >
                    <SelectItem value=" Beginner" className="focus:bg-ring ">
                      Beginner
                    </SelectItem>
                    <SelectItem value="Intermediate" className="focus:bg-ring">
                      Intermediate
                    </SelectItem>
                    <SelectItem value="Advanced" className="focus:bg-ring">
                      Advanced
                    </SelectItem>
                    <SelectItem value="Guru" className="focus:bg-ring">
                      Guru
                    </SelectItem>
                  </ProClubCustomSelect>
                )}
              />
              <FormField
                control={control}
                name="Club"
                render={({ field }) => (
                  <ProClubCustomSelect
                    fieldProps={field}
                    formState={formState}
                    onValueChange={field.onChange}
                    value={field.value}
                    label=" Are you in any tech-related club?"
                    placeholder="Please provide an answer"
                  >
                    <SelectItem value="No" className="focus:bg-ring ">
                      No
                    </SelectItem>
                    <SelectItem value="Yes" className="focus:bg-ring">
                      Yes
                    </SelectItem>
                  </ProClubCustomSelect>
                )}
              />
            </div>
            <div className="md:grid grid-cols-2 sm:gap-6 mb-7">
              <FormField
                control={form.control}
                name="Heard"
                render={({ field }) => (
                  <CustomTextArea fieldProps={field} formState={formState}>
                    <FormLabel>How did you hear about the Pro-Club?</FormLabel>
                  </CustomTextArea>
                )}
              />
              <FormField
                control={form.control}
                name="Expectation"
                render={({ field }) => (
                  <CustomTextArea fieldProps={field} formState={formState}>
                    <FormLabel>
                      What do you expect to achieve from the Pro-Club?
                    </FormLabel>
                  </CustomTextArea>
                )}
              />
            </div>
            <div className="flex justify-center flex-wrap gap-5">
              <CustomButton direction="left" title="Previous" type="button">
                <ArrowLeft className="mr-2" />
              </CustomButton>
              {formState.isDirty && (
                <EraseAlertDialog about="bootcamp" reset={reset} />
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

const BootcampWithTransition = transition(Bootcamp);

export { BootcampWithTransition };
