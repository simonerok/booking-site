import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

/* fetcher data statisk når siden buildes første gang -ikke flere */
export async function getStaticProps() {
  return { props: { isLanding: true } };
}

export default function LandingProgram({ bandData }) {
  return (
    <>
      <Head>
        <title>Foo Festival</title>
      </Head>
      <section className={styles.programContainer}>
        <h2>ARTISTS</h2>
        {/* viser de første 15 navne */}
        {bandData.slice(0, 15).map((band) => (
          <p className={styles.programText} key={band.bandData}>
            {" " + band.name} /
          </p>
        ))}
        <Link className={styles.link1} href="/program">
          See full program
        </Link>
      </section>
    </>
  );
}
