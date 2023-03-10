import Link from "next/link";
import { getFullDate } from "@/lib/date";
import { IBlog } from "@/interfaces/blog";

const BlogCard = ({ title, excerpt, publishOn, slug }: IBlog) => {
  return (
    <Link href={`/blogs/${slug}`} className="text-[#3c4856c2]">
      <div className="flex items-start justify-between gap-6 mb-2">
        <h2 className="text-xl font-medium text-black">{title}</h2>
        <time className="px-2 text-sm leading-loose shrink-0">
          {publishOn ? getFullDate(publishOn) : "Now"}
        </time>
      </div>
      <div>
        <p className="line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
