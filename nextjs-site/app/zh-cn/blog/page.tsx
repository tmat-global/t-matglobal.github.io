import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "博客 | T-Mat Global",
  description: "DevOps、云计算、DevSecOps 和网络安全实践指南与技术洞察。",
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/blog/",
    languages: {
      en: "https://www.t-matglobal.com/blog/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/blog/",
    },
  },
};

export default function ChineseBlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero firstWord="技术" restOfTitle="博客" bgVariant="feed" />
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center font-body text-base text-brand-black/70">
            探索 T-Mat Global 关于 DevOps、云安全、DevSecOps 和基础设施工程的技术文章。目前完整文章以英文发布。
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
}
