import { getFullDate } from "@/lib/date";
import moment from "moment";
import Image from "next/image";

export interface BlogDetailHeadingProps {
  title?: string;
  excerpt?: string;
  author?: string;
  imageUrl?: string;
}

const BlogDetailHeading = ({
  title,
  excerpt,
  author = "Huy Nguyen",
  imageUrl = "https://bejamas.io/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flxs6x7jp%2Fproduction%2Fdafc804860ef3aca8daa7dd91e5275f727b37012-2000x2000.png&w=1080&q=75",
}: BlogDetailHeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-[4vw] md:flex-row">
      <div className="flex-1">
        <time className="text-sm">
          {getFullDate(moment())} - {7} min to read
        </time>
        <h1>{title}</h1>
        <p className="">{excerpt}</p>
        <p className="text-sm">
          By <span className="text-base font-semibold">{author}</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image
          src={imageUrl}
          alt={title || "The Future of Artificial Intelligence"}
          height={445}
          width={445}
          className="rounded-2xl"
          priority
        />
      </div>
    </div>
  );
};

export default BlogDetailHeading;
