type TitleSection = {
  children: React.ReactNode;
};
export function TitleSection(props: TitleSection) {
  return <h1 className="">{props.children}</h1>;
}
