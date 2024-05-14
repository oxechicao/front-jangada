type TableHead = {
  children: React.ReactNode;
};

export function Th(props: TableHead) {
  return <th scope="col">{props.children}</th>;
}
