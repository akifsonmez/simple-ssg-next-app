import Link from "next/link";

function Navbar() {
  return (
    <nav>
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
