import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Redirecting to Homepage...</h1>
      <h2>Oooooppppss</h2>
      <h3>Page not found</h3>
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
