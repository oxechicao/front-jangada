import { LinkHeader } from "./LinkHeader";

export function Header() {
  return (
    <header className="flex w-100 bg-fuchsia-950">
      <nav className="flex w-100 gap-4">
        <LinkHeader>Home</LinkHeader>
        <LinkHeader>Items</LinkHeader>
      </nav>
    </header>
  );
}
