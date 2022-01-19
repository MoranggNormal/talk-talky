import Link from "next/link";

export default function Home({ storedUser }) {
  return (
    <>
      Opa
      <Link href={"/login"}>
        <a>Login</a>
      </Link>
    </>
  );
}
