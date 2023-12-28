import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group !gap-3 group-[.toaster]:text-lg toast   group-[.toaster]:font-bold group-[.toaster]:text-white group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toaster]:text-base group-[.toaster]:font-medium group-[.toast]:bg-white group-[.toast]:text-muted-foreground ",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
