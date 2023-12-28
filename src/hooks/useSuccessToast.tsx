import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useSuccessToast = (isSubmitSuccessful: boolean) => {
  const navigate = useNavigate();
  if (isSubmitSuccessful) {
    toast("Form Successfully Submitted", {
      position: "top-center",
      duration: 2000,
      dismissible: true,
      important: true,
      icon: <CheckCircle />,
      className: "gap-5",
      style: { padding: "1rem", background: "#1dc41d" },
    });

    setTimeout(() => {
      navigate("/thank_you");
    }, 1000);
  }
};
