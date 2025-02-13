import { RootLayoutProps } from "@/app/layout";
import { Container } from "@/components/ui/container/Container";
import { A } from "@/components/ui";
import I18n from "@/components/ui/i18n/i18n";
import { getDictionary } from "@/dictionaries";

export default async function HomePage(props: RootLayoutProps) {
  return (
    <Container>
      <p>
        <I18n value="about" />
      </p>
      <A href="https://github.com/oxechicao/front-jangada">Projeto no Github</A>
    </Container>
  );
}
