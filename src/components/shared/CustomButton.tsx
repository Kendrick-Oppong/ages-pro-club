import { CustomButtonProps } from "@/types/InputTypes";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { ToastNotification } from "@/components/shared/ToastNotification";

export const CustomButton = ({
  width,
  title,
  verified,
  type,
  children,
  disabled,
  errorMessage,
  direction = "",
}: CustomButtonProps) => {
  const navigate = useNavigate();

  const handleErrorToast = () => {
    ToastNotification(type, disabled, errorMessage);
    if (type === "button") {
      navigate("/personal-details");
    }
  };

  return (
    <Button
      onClick={handleErrorToast}
      variant="outline"
      disabled={verified}
      type={type}
      className={`w-[9rem] ${width} mt-5 text-textPrimary hover:bg-textPrimary hover:text-[#fff]  cursor-pointer font-medium rounded-lg border-[2px] border-textPrimary px-8 py-6 ${
        type === "reset"
          ? " hover:bg-red-600 border-red-600 text-red-600  "
          : ""
      }`}
    >
      <>
        {direction ? (
          <>
            <span className="ml-2 hover:text-[#ffff]">{children}</span>
            {title}
          </>
        ) : (
          <>
            {title}
            <span className="ml-2 hover:text-[#ffff]">{children}</span>
          </>
        )}
      </>
    </Button>
  );
};
