import { Text, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Faucet from "../src/Faucet";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solana dev faucet</title>
        <meta
          name="description"
          content="A faucet for solana tokens on dev net"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VStack mb={10}>
          <Heading as="h1" size={"2xl"}>
            🔥{" "}
            <span className={styles.animateCharcter}>
              Solana faucet {" "}
            </span>
            🔥
          </Heading>
          <Text color={"whiteAlpha.800"} fontSize="xl">
            Use this faucet airdrop yourself
          </Text>
        </VStack>
        <Faucet />
      </main>
    </div>
  );
};

export default Home;