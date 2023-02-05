import { MDX_ABSOLUTE_PATH } from "./../constants/index";
import { getMardownWithMeta } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";

export const getBlogs = async () => {
  const mdxSources = fs.readdirSync(MDX_ABSOLUTE_PATH).map((file) => {
    const slug = file.slice(0, -4);
    return getBlog(slug);
  });

  return Promise.all(mdxSources);
};

export const getBlog = async (slug: string) => {
  const markdownWithMeta = getMardownWithMeta(`${slug}.mdx`);
  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true,
  });
  return { mdxSource, slug };
};
