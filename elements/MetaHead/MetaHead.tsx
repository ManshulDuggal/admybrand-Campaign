/**
 * @author Rishi Raj
 * @email rishi@snaphy.com
 * @create date 2021-10-25 22:23:09
 * @modify date 2021-10-25 22:23:09
 * @desc [description]
 */
import React from "react";
import Head from "next/head";

interface Props {
    title: string;
    keywords: string;
    description: string
    author: string
}

const MetaHead = ({title, keywords, description, author}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#050a4e" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
export default MetaHead;
