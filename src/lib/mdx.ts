import fs from "fs";
import path from "path";
import { MDX_ABSOLUTE_PATH } from "@/constants";

export const getMardownWithMeta = (mdxPath: string) => {
  return fs.readFileSync(path.join(MDX_ABSOLUTE_PATH, mdxPath), "utf-8");
};
