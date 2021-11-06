import React, { useState } from "react";
import Head from "next/head";
import { metadata } from "../constants/meta";
import HomeComp from '../components/Home'
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{metadata.home.title}</title>
        <meta name="keywords" content={metadata.home.keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.home.description} />
        <meta name="author" content={metadata.home.author} />
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
      <HomeComp />
      <footer className={styles.footer}></footer>
    </div>
  );
}
