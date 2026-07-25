import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

const TITLE = "Blog | DevSecOps Insights for US, UAE & UK Enterprises";
const DESCRIPTION =
  "Practical guidance on CI/CD security, cloud security, compliance automation, and managed DevSecOps from T-Mat Global's engineering team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero firstWord="BLOG" imageSrc="/heroes/services.jpg" />

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
