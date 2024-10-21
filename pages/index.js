import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";
import CountOnUs from "@/components/CountOnUs";
import Loan from "@/components/LoanRequirements";
import Partners from "@/components/Partners";
import Benefits from "@/components/Benefits";
import Layout from "@/components/Layout";
import Simulation from "@/components/Simulation";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        <title>CrediPlus - Créditos Ágiles para Trabajadores en Colombia</title>
        <meta name="description" content="CrediPlus es una plataforma diseñada para que los trabajadores en Colombia soliciten y accedan a créditos de manera rápida, fácil y segura. Sin papeleos complicados, con aprobación ágil y tasas competitivas. ¡Solicita tu crédito hoy!" />
        <meta name="keywords" content="Créditos ágiles, préstamos rápidos, créditos para trabajadores, financiación personal, préstamos en Colombia, CrediPlus, crédito fácil, crédito online, aprobación rápida, crédito sin papeleo"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Banner />
      <Simulation/>
      <CountOnUs />
      <Loan />
      <Partners />
      <Benefits />
    </Layout>
    </>
  );
}
