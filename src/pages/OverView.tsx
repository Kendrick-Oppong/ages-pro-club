import { useDispatch, useSelector } from "react-redux";
import {
  getPersonalDetails,
  removePersonalDetails,
} from "@/redux/personalDetailSlice";
import {
  getBootcampDetails,
  removeBootcampDetails,
} from "@/redux/bootCampSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BackgroundImage, CustomButton } from "@/components/shared";
import { CheckCircle, CheckCircle2, PencilLine, Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import supabase from "@/config/supabaseClient";
import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { transition } from "@/framer";
import { ToastNotification } from "@/components/shared/ToastNotification";
import { persistor } from "@/redux/store";
import { useSuccessToast, useTitle } from "@/hooks";

export const OverView = () => {
  const personalDetailsData = useSelector(getPersonalDetails);
  const bootcampDetailsData = useSelector(getBootcampDetails);
  const dispatch = useDispatch();
  const dbRef = collection(
    db,
    personalDetailsData.FirstName || "AGES PRO CLUB"
  );
  const [captcha, setCaptcha] = useState<null | string | boolean>(null);
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();

  const handle_ReCAPTCHA_Error = () => {
    if (!captcha)
      ToastNotification("submit", false, "Please verify reCAPTCHA ");
  };

  useSuccessToast(isSubmitSuccessful);
  useTitle("Overview");

  const onSubmit = async () => {
    const { error } = await supabase.from("Members").insert([
      {
        First_Name: personalDetailsData.FirstName?.trim(),
        Other_Names: personalDetailsData.LastName?.trim(),
        Email: personalDetailsData.Email?.trim(),
        Phone_Number: personalDetailsData.PhoneNumber?.trim(),
        Address: personalDetailsData.Address?.trim(),
        Gender: personalDetailsData.Gender,
        Programme: bootcampDetailsData.Programme?.trim(),
        Year: Number(bootcampDetailsData.Year),
        Experience: bootcampDetailsData.Experience,
        Club_Member: bootcampDetailsData.Club,
        Pro_Club_Discovery: bootcampDetailsData.Heard?.trim(),
        Expectation: bootcampDetailsData.Expectation?.trim(),
      },
    ]);
    console.log(error);

    try {
      await addDoc(dbRef, {
        First_Name: personalDetailsData.FirstName?.trim(),
        Other_Names: personalDetailsData.LastName?.trim(),
        Email: personalDetailsData.Email?.trim(),
        Phone_Number: personalDetailsData.PhoneNumber?.trim(),
        Address: personalDetailsData.Address?.trim(),
        Gender: personalDetailsData.Gender,
        Programme: bootcampDetailsData.Programme?.trim(),
        Year: Number(bootcampDetailsData.Year),
        Experience: bootcampDetailsData.Experience,
        Club_Member: bootcampDetailsData.Club,
        Pro_Club_Discovery: bootcampDetailsData.Heard?.trim(),
        Expectation: bootcampDetailsData.Expectation?.trim(),
      });
      console.log("Form submitted to Firebase!");
    } catch (error) {
      console.error("Error submitting form to Firebase:", error);
    }

    // Reset the Redux slices
    dispatch(removePersonalDetails());
    dispatch(removeBootcampDetails());

    // Clear the persisted data in local storage
    await persistor.purge();
    reset();
    localStorage.removeItem("persist:root");
  };

  return (
    <main
      className={`${
        isSubmitting ? "cursor-not-allowed " : ""
      }relative p-5 sm:p-10`}
    >
      {isSubmitting && (
        <div className=" cursor-not-allowed fixed  inset-0 z-50 backdrop-blur-[2px] !overflow-hidden"></div>
      )}
      <div className="relative border border-textPrimary rounded-xl pb-16">
        <BackgroundImage />
        <h1 className="text-2xl text-center italic font-bold py-8">Overview</h1>
        <form className="px-5 md:px-14" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="grid grid-cols-3 justify-between items-center">
              <Separator />
              <h2 className="text-center  font-medium underline decoration-wavy underline-offset-4 ">
                Personal Details
              </h2>
              <Separator />
            </div>
            <div className="relative ">
              <Label>First Name</Label>
              <Controller
                name="FirstName"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={personalDetailsData.FirstName}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />

              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative ">
              <Label>Last Name</Label>
              <Controller
                name="Other_Names"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={personalDetailsData.LastName}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className=" relative">
              <Label>Email</Label>
              <Controller
                name="Email"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={personalDetailsData.Email}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Phone number</Label>
              <Controller
                name="Phone_Number"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={personalDetailsData.PhoneNumber}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Address</Label>
              <Controller
                name="Address"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={personalDetailsData.Address}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Gender</Label>
              <Controller
                name="Gender"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={personalDetailsData.Gender}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute  right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="text-center  mt-3">
              <CustomButton title="Edit Form" type="button" width="w-full">
                <PencilLine />
              </CustomButton>
            </div>
          </div>
          <div className="mt-10 ">
            <div className="grid grid-cols-3 justify-between items-center">
              <Separator />
              <h2 className="text-center font-medium underline decoration-wavy underline-offset-4 ">
                Pro-Club Details
              </h2>
              <Separator />
            </div>
            <div className="relative">
              <Label>Programme</Label>
              <Controller
                name="Programme"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={bootcampDetailsData.Programme}
                    className="pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Year</Label>
              <Controller
                name="Year"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={bootcampDetailsData.Year}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Experience</Label>
              <Controller
                name="Experience"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={bootcampDetailsData.Experience}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Club member?</Label>
              <Controller
                name="Club_Member"
                control={control}
                render={({ field }) => (
                  <Input
                    disabled
                    readOnly
                    {...field}
                    value={bootcampDetailsData.Club}
                    className=" pl-5 focus-visible:border  focus-visible:outline-none focus:border-none border-green-500 !opacity-100"
                  />
                )}
              />
              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[60%]"
              />
            </div>
            <div className="relative">
              <Label>Pro-Club discovery</Label>
              <Controller
                name="Pro_Club_Discovery"
                control={control}
                render={({ field }) => (
                  <Textarea
                    className="border-green-500 bg-inputBackground  !opacity-100"
                    disabled
                    readOnly
                    {...field}
                    value={bootcampDetailsData.Heard}
                  />
                )}
              />

              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[55%]"
              />
            </div>
            <div className="relative">
              <Label>Expectation</Label>
              <Controller
                name="Expectation"
                control={control}
                render={({ field }) => (
                  <Textarea
                    className="border-green-500 bg-inputBackground  !opacity-100"
                    disabled
                    readOnly
                    {...field}
                    value={bootcampDetailsData.Expectation}
                  />
                )}
              />

              <CheckCircle2
                color="green"
                className="absolute right-[3%] sm:right-[1%] top-[55%]"
              />
            </div>
            <div className="text-center mt-3">
              <Link to="/bootcamp">
                <CustomButton title="Edit Form" width="w-full">
                  <PencilLine />
                </CustomButton>
              </Link>
            </div>
          </div>
          <Separator className="mt-10 bg-orange-500" />

          <div className="form_group_recaptcha mt-10 !cursor-pointer">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(val) => setCaptcha(val)}
            />
          </div>
          <div className="text-destructive text-center mt-2">
            {!captcha && (
              <>
                <small>Refresh page if reCAPTCHA isn't showing </small>
              </>
            )}
          </div>
          <div
            className={`text-center mt-5 ${
              isSubmitSuccessful
                ? "!cursor-not-allowed pointer-events-none !opacity-50"
                : ""
            }`}
            role="button"
            onClick={handle_ReCAPTCHA_Error}
          >
            <CustomButton
              title={
                isSubmitting
                  ? "Submitting Form"
                  : isSubmitSuccessful
                  ? "Form Submitted"
                  : "Submit Form"
              }
              type="submit"
              verified={!captcha}
              width="!w-full !border-[#1dc41d] hover:!bg-[#1dc41d] hover:!text-[#fff] !text-[#1dc41d]"
            >
              {isSubmitSuccessful && <CheckCircle />}
              {isSubmitting ? (
                <div role="button">
                  <svg
                    aria-hidden="true"
                    className="  w-8 h-6 me-2 text-gray-200  animate-spin dark:text-gray-600 fill-green-600 hover:fill-green-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : isSubmitSuccessful ? (
                ""
              ) : (
                <Rocket />
              )}
            </CustomButton>
          </div>
        </form>
      </div>
    </main>
  );
};

const OverViewWithTransition = transition(OverView);

export { OverViewWithTransition };
