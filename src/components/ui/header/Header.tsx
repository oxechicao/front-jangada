import { H1 } from "@/components/ui/text";
import { LinkHeader } from "./LinkHeader";

export function Header() {
  return (
    <header className="flex bg-neutral-950 container mx-auto">
      <div className="flex w-full justify-between items-center p-4">
        <H1>Karteira</H1>
        <nav className="flex gap-4">
          <LinkHeader href="/">Início</LinkHeader>
          <LinkHeader href="/expensies">Despesas</LinkHeader>
          <LinkHeader href="/department">Departamentos</LinkHeader>
        </nav>
      </div>
    </header>
  );
}
