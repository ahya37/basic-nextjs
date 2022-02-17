import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/me.jpeg" width={200} height={200} alt="profile" />
        <h1 className={styles["title-homepage"]}>Welcome Ahya</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
          corporis. Culpa ullam, officia eligendi ipsam eveniet possimus. Hic
          delectus aperiam odio sunt fugiat. Inventore, alias. Deserunt
          doloribus labore repellendus alias.
        </p>
        <Image src="/ok.png" width={200} height={200} alt="profile" />
      </Layout>
    </>
  );
}
