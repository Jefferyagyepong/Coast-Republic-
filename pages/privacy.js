/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";


import PrivacyPage from "@/components/Footer/Privacy";



const Privacy = () => {

  return (
    <>
      <Head>
        <title>Privacy Policy | Coast Republic</title>
        <meta
          name="description"
          content="How Coast Republic collects, uses, and protects your personal information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://coast-republic.vercel.app/privacy" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Coast Republic" />
        <meta
          property="og:description"
          content="How Coast Republic collects, uses, and protects your personal information."
        />
        <meta property="og:url" content="https://coast-republic.vercel.app/privacy" />
        <meta property="og:site_name" content="Coast Republic" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Coast Republic" />
        <meta
          name="twitter:description"
          content="How Coast Republic collects, uses, and protects your personal information."
        />

        <meta name="robots" content="index, follow" />
      </Head>
   
      <PrivacyPage />
  


    </>
  );
};
export default PrivacyPage;
