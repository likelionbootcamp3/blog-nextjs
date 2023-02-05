import moment from "moment";
import BlogCard from "./BlogCard";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { getBlogs } from "@/services/blog";

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <section className="h-full">
      {/* Blogs */}
      <div className="h-full max-w-screen-md px-4 mx-auto md:px-6">
        <div className="flex flex-col h-full">
          <ul className="flex flex-col gap-10 grow">
            {blogs.map((blog) => {
              return (
                <BlogCard
                  key={blog.slug}
                  date={moment()}
                  slug={blog.slug}
                  {...blog.mdxSource.frontmatter}
                />
              );
            })}
          </ul>
          {/* Pagination */}
          <div className="flex items-center justify-between py-2 mt-4">
            <button className="flex items-center gap-2 group">
              <ArrowLongLeftIcon className="w-5 h-5 transition group-hover:-translate-x-1" />
              Prev
            </button>
            <button className="flex items-center gap-2 group">
              Next
              <ArrowLongRightIcon className="w-5 h-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
