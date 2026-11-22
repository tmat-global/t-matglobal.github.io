import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const TITLE = "加入我们 | T-Mat Global 招聘";
const DESCRIPTION =
  "T-Mat Global Technologies 正在发展壮大。我们欢迎 DevOps、DevSecOps、云安全和平台工程领域的专业人才与我们联系。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/careers/",
    languages: {
      en: "https://www.t-matglobal.com/careers/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/careers/",
    },
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHero firstWord="加入" restOfTitle="我们" bgVariant="team" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 w-full max-w-xs">
            <Image
              src="/legal/careers.svg"
              alt=""
              width={400}
              height={400}
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>

          <p className="font-body text-lg leading-relaxed text-brand-black/80">
            T-Mat Global Technologies 正在不断发展。作为一家获得
            DPIIT 认可、专注于 DevSecOps 的企业，并为美国、阿联酋和英国的企业客户提供服务，
            我们欢迎关注安全、自动化和可靠交付的工程师与我们联系。
          </p>

          <p className="mt-6 font-body text-lg leading-relaxed text-brand-black/80">
            目前我们暂未在此发布具体职位空缺。如果您希望参与未来的招聘机会，
            并在 DevSecOps 工程、云安全、平台工程或相关领域发展，
            欢迎将您的简历以及简短的求职意向发送至以下邮箱。
          </p>

          <a
            href="mailto:info@t-matglobal.com?subject=Career%20Inquiry"
            className="mt-10 block w-full rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
          >
            info@t-matglobal.com
          </a>
        </div>
      </section>
    </>
  );
}
