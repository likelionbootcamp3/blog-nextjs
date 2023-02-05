"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

const components = {};

const MDXRemoteWrapper = (props: MDXRemoteProps) => {
  return <MDXRemote {...props} components={components} />;
};

export default MDXRemoteWrapper;
