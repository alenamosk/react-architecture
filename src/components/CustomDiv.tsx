type CustonDivVariant = "success" | "error" | "warning";

interface CustomDivProps {
  variant: CustonDivVariant;
  children: string | boolean | number;
}
const CustomDiv = (props: CustomDivProps) => {
  const divStyles: Record<CustonDivVariant, string | boolean | number> = {
    success: "success",
    error: "error",
    warning: "error",
  };
};
