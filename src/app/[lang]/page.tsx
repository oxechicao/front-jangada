import { RootLayoutProps } from "@/app/[lang]/layout";
import { Container } from "@/components/ui/container/Container";
import { A, H1 } from "@/components/ui";
import I18n from "@/components/ui/i18n/i18n";
import { getDictionary } from "@/dictionaries";

export default async function HomePage(props: RootLayoutProps) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  return (
    <Container>
      <p>
        <I18n value="about" dictionary={dictionary} />
      </p>
      <A href="https://github.com/oxechicao/front-jangada">Projeto no Github</A>
    </Container>
  );
}
