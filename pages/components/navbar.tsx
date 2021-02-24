import Head from 'next/head';
import { Container } from '@/website/components/container';
import { NavbarVariantOne } from '@/components/navbar/examples/variantOne';
import { NavbarVariantTwo } from '@/components/navbar/examples/variantTwo';
import { NavbarVariantThree } from '@/components/navbar/examples/variantThree';
import MobileLayout from '@/website/components/layout/mobile';
import NavbarVariantOneSnippet from '@/website/snippets/navbar/variantOne.mdx';
import NavbarVariantTwoSnippet from '@/website/snippets/navbar/variantTwo.mdx';
import NavbarVariantThreeSnippet from '@/website/snippets/navbar/variantThree.mdx';

export default function NavbarPage() {
  return (
    <>
      <Head>
        <title>Navbar</title>
        <meta
          name="description"
          content="Kimia-ui navbar component is a navigation header that is placed at the top of the page which allows to navigate in different pages"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-20 mt-12">
          Navbar
        </h1>
        <NavbarVariantOne />
        <NavbarVariantOneSnippet />
        <NavbarVariantTwo />
        <NavbarVariantTwoSnippet />
        <NavbarVariantThree />
        <NavbarVariantThreeSnippet />
      </Container>
    </>
  );
}

NavbarPage.Layout = MobileLayout;
