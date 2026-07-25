import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative aspect-video w-full">
        <Image
          src={post.image}
          alt={`Cover image for the article "${post.title}"`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <p className="font-heading text-xs font-semibold uppercase tracking-widest text-brand-accent">
          {formatDate(post.date)}
        </p>
        <h2 className="mt-2 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-brand-black">
          {post.title}
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-brand-black/70">
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-brand-accent hover:underline"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
