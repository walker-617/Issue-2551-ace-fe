import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@components/styles/Home.module.css";
import Card from "components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Card />;
}
