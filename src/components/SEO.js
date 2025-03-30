// src/components/SEO.js
import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Add additional SEO meta tags as needed */}
    </Head>
  );
};

export default SEO;
