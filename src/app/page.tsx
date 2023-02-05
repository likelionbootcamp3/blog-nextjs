import Blogs from "@/components/blog/Blogs";

export default function Home() {
  /* @ts-expect-error Server Component */
  return <Blogs />;
}
