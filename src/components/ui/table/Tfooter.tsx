type TableFooter = {
  children: React.ReactNode;
};

export const Tfooter = ({ children }: TableFooter) => {
  return <tfoot>{children}</tfoot>;
};
