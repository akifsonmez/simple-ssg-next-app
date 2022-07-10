import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <div className="app-name">
        <h1>Sample Next App (SSG)</h1>
        <Image src="/vercel.svg" width={128} height={64} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/subpath">
        <a>Subpath</a>
      </Link>
      <Link href="/subpath/insubpath">
        <a>In Subpath</a>
      </Link>
    </nav>
  );
}

export default Navbar;
