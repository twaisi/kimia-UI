import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import { TooltipComponent } from "../components/general/tooltip";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <TooltipComponent />
    </>
  );
}
