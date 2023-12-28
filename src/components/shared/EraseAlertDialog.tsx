import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { CustomButton } from ".";
import { Eraser, AlertTriangle } from "lucide-react";
import { removeBootcampDetails } from "@/redux/bootCampSlice";
import { removePersonalDetails } from "@/redux/personalDetailSlice";
import { useDispatch } from "react-redux";

export const EraseAlertDialog = ({
  reset,
  about,
}: {
  reset: () => void;
  about: string;
}) => {
  const dispatch = useDispatch();

  const handleFormReset = () => {
    if (about === "bootcamp") {
      dispatch(removeBootcampDetails());
      reset({
        Programme: "",
        Year: "",
        Experience: "",
        Club: "",
        Heard: "",
        Expectation: "",
      });
    }

    if (about === "personal-details") {
      dispatch(removePersonalDetails());
      reset({
        FirstName: "",
        LastName: "",
        Email: "",
        Address: "",
        PhoneNumber: "",
        Gender: "",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div role="button">
          <CustomButton title="Reset" type="reset">
            <Eraser />
          </CustomButton>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="text-lg  bg-[#f4f4f4]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-red-600">
            Are you absolutely sure? <AlertTriangle />
          </AlertDialogTitle>
          <AlertDialogDescription>
         This will permanently delete your form data
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleFormReset}>
            Erase form data
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
