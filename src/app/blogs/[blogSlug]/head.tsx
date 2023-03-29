import Meta from "@/components/Meta";
import { getBlog } from "@/services/blog";
import type { BlogParams } from "./page";

const Head = async ({ params }: BlogParams) => {
  const { blogSlug } = params;
  const blog = await getBlog(blogSlug);
  return <Meta title={blog.frontmatter?.title} />;
};

export default Head;
