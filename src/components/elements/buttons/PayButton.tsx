import { Button } from "@/components/ui/buttons/";

type PayButton = {
  children?: React.ReactNode;
};

export const PayButton = ({ children = "Pagar" }: PayButton) => {
  return (
    <Button className="bg-emerald-500 border-emerald-500">{children}</Button>
  );
};
