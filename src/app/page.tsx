import Blogs from "@/components/Blog/Blogs";

export default function Home() {
  /* @ts-expect-error Server Component */
  return <Blogs />;
}
