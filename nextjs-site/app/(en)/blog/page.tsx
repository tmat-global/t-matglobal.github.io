import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

const TITLE =
  "Blog | DevOps, Cloud and Security Insights";
const DESCRIPTION =
  "Practical guides on CI/CD security, cloud security and cost, production readiness and disaster recovery from T-Mat Global's engineering team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...seoMeta({ title: TITLE, description: DESCRIPTION, path: "/blog/" }),
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero firstWord="BLOG" bgVariant="feed" />

      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
