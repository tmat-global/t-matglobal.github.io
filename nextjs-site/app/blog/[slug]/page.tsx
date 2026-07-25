import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://t-matglobal.com";

interface BlogPostPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "T-Mat Global Technologies Pvt. Ltd.",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "T-Mat Global Technologies Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-brand-black">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-green px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wide text-brand-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 font-body text-sm font-semibold uppercase tracking-wide text-white/70">
            {formatDate(post.date)}
          </p>
        </div>
      </section>

      <article className="bg-white py-16">
        <div
          className="prose prose-lg mx-auto max-w-3xl px-4 prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-brand-black prose-p:font-body prose-p:text-brand-black/80 prose-a:text-brand-accent prose-strong:text-brand-black sm:px-6 lg:px-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <section className="bg-brand-green py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/schedule-demo"
            className="block w-full rounded bg-brand-black px-10 py-5 font-heading text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-black sm:inline-block sm:w-auto sm:text-xl"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
