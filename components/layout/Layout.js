import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/results">Results</Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Layout;
