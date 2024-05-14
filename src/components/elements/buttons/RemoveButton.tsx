import { Button } from "@/components/ui/buttons/";

type RemoveButton = {
  children?: React.ReactNode;
};

export const RemoveButton = ({ children = "Remover" }: RemoveButton) => {
  return <Button className="bg-red-500 border-red-500">{children}</Button>;
};
