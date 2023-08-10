import Link from "next/link";
import { ReactNode } from "react";

const Navbar = () => {
  return (
    <div className="divWithAllNavbar">
      <Link className="activeInTheNav" href="/">
        Home
      </Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>I'm a nice footer</p>
    </div>
  );
};

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <>
      <Navbar />

      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
