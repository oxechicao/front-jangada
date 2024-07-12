import React from "react";

type Money = {
  children: React.ReactNode;
};

export const Money = (props: Money) => {
  return (
    <span>
      {Number(props.children).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </span>
  );
};
