import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const YOUTUBE_VIDEO_ID = "REPLACE_WITH_VIDEO_ID";

export default function BusinessVideo({
  locale = "en",
}: {
  locale?: "en" | "zh-CN";
}) {
  const isChinese = locale === "zh-CN";

  return (
    <section className="bg-brand-grey py-20">
      <ScrollFadeIn className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
          {isChinese ? "企业视频" : "Business Video"}
        </h2>

        <div className="mt-10 rounded-lg bg-brand-green p-4 sm:p-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title={
                isChinese
                  ? "T-Mat Global 企业介绍视频"
                  : "T-Mat Global business video"
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <p className="mt-8 font-body text-base text-brand-black/70">
          {isChinese
            ? "欢迎访问我们的 YouTube 频道，观看更多视频。"
            : "For more videos you can check out our YouTube channel"}
        </p>

        <a
          href="#"
          className="mt-4 block w-full rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
        >
          {isChinese ? "查看更多" : "View More"}
        </a>
      </ScrollFadeIn>
    </section>
  );
}
