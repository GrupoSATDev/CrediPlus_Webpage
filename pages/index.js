import Head from "next/head";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import CountOnUs from "@/components/CountOnUs";
import Loan from "@/components/LoanRequirements";
import Partners from "@/components/Partners";
import Benefits from "@/components/Benefits";
import NavbarSlider from "@/components/NavbarSlider";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            CrediPlus - Créditos Ágiles para Trabajadores en Colombia
          </title>
          <meta
            name="description"
            content="CrediPlus es una plataforma diseñada para que los trabajadores en Colombia soliciten y accedan a créditos de manera rápida, fácil y segura. Sin papeleos complicados, con aprobación ágil y tasas competitivas. ¡Solicita tu crédito hoy!"
          />
          <meta
            name="keywords"
            content="Créditos ágiles, préstamos rápidos, créditos para trabajadores, financiación personal, préstamos en Colombia, CrediPlus, crédito fácil, crédito online, aprobación rápida, crédito sin papeleo"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Banner />
        <CountOnUs />
        <Loan />
        <Partners />
        <Benefits />
        <NavbarSlider />
      </Layout>
    </>
  );
}
