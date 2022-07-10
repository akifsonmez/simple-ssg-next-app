import Link from "next/link";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oooooppppss</h1>
      <h2>Page not found</h2>
      <p>
        Return{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
