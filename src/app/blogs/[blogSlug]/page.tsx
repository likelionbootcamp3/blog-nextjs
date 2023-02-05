import { getBlog, getBlogs } from "@/services/blog";
import MDXRemoteWrapper from "@/components/mdx/MDXRemoteWrapper";
import BlogDetailHeading from "@/components/blog/BlogDetailHeading";

export interface BlogParams {
  params: { blogSlug: string };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    blogSlug: blog.frontmatter?.slug,
  }));
}

const BlogDetail = async ({ params }: BlogParams) => {
  const { blogSlug } = params;
  const blog = await getBlog(blogSlug);

  return (
    <article className="prose mx-auto max-w-none lg:prose-xl">
      {/* Introduction */}
      <div className="mx-auto max-w-screen-lg px-4 md:px-6 ">
        <BlogDetailHeading {...blog.frontmatter} />
      </div>
      {/* Body */}
      <div className="mx-auto max-w-screen-sm px-4">
        <MDXRemoteWrapper {...blog} />
      </div>
    </article>
  );
};

export default BlogDetail;
