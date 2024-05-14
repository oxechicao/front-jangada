import React from "react";

type Table = {
  children: React.ReactNode;
};
export function Table(props: Table) {
  return <table className="w-full ">{props.children}</table>;
}
