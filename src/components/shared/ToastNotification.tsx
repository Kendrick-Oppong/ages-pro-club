import { toast } from "sonner";

import { XCircle } from "lucide-react";

export const ToastNotification = (
  type?: "submit" | "reset" | "button" | undefined,
  disabled?: boolean | undefined,
  errorMessage?: string
) => {
  if (disabled === false && type === "submit") {
    toast(errorMessage ?? "Please fill all fields", {
      position: "top-center",
      duration: 3000,
      dismissible: true,
      important: true,
      icon: <XCircle />,
      className: "gap-5",
      cancel: {
        label: "Dismiss",
      },
      style: {
        padding: "1rem",
        backgroundColor: "red",
      },
    });
  }
};
