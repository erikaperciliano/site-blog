import Link from "next/link";

export default function HomePage() {
  return (
    <div>
     <h2>Home</h2>

     <Link href='/users'>Users Page</Link>
    </div>
  );
}
