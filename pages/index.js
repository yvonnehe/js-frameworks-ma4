import Head from "next/head";
import Heading from "../components/Heading";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Heading heading="Home page" />
      <p>
        Check out these really cool{" "}
        <Link className="deco" href="/results">
          results
        </Link>
      </p>
    </>
  );
};

export default Home;
