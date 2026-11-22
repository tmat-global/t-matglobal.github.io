import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";
import { projects } from "@/data/projects";

const chineseCaptions: Record<string, string> = {
  "hotel-ops":
    "为多物业酒店管理平台提供 CI/CD 流水线、云基础设施及全天候安全运营服务",
  healthcare:
    "作为客户的软件开发合作伙伴，完成医院管理平台的全周期开发与安全交付",
  erp:
    "为国际客户提供制造业 ERP 系统的端到端开发、部署及托管运营服务",
  lims:
    "为医疗软件客户设计、开发并安全交付医学实验室信息管理平台",
};

export default function OurProjects({
  locale = "en",
}: {
  locale?: "en" | "zh-CN";
}) {
  const isChinese = locale === "zh-CN";

  return (
    <section className="bg-brand-green py-20">
      <ScrollFadeIn className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-6"
          segments={[
            {
              text: isChinese ? "我们的项目" : "OUR PROJECTS",
              color: "black",
            },
          ]}
        />

        <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-brand-black/80">
          {isChinese
            ? "从作为值得信赖的开发合作伙伴构建完整平台，到保障平台安全并提供生产环境运营服务，以下是我们的实际项目成果。"
            : "From building complete platforms as a trusted development partner to securing and operating them in production, here’s where our work runs live."}
        </p>

        <Link
          href={isChinese ? "/zh-cn/our-work" : "/our-work"}
          className="mt-8 block w-full rounded border-2 border-brand-black px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-black hover:text-white sm:inline-block sm:w-auto"
        >
          {isChinese ? "查看更多" : "View More"}
        </Link>

        <div className="mt-14 grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollFadeIn
              key={project.slug}
              delayMs={(i % 2) * 100}
              className="overflow-hidden rounded-lg bg-white shadow-xl"
            >
              <div className="flex items-center gap-2 bg-brand-black px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-3 h-5 flex-1 rounded bg-white/10" />
              </div>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.image}
                  alt={
                    isChinese
                      ? `${project.name}平台仪表板截图`
                      : `Dashboard screenshot of the ${project.name} platform`
                  }
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-5 py-4">
                <p className="font-heading text-base font-bold uppercase tracking-wide text-brand-black">
                  {project.name}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-black/70">
                  {isChinese
                    ? chineseCaptions[project.slug] ?? project.caption
                    : project.caption}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </ScrollFadeIn>
    </section>
  );
}
