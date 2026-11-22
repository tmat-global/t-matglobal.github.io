import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const TITLE = "联系我们 | 免费云安全评估";
const DESCRIPTION =
  "联系 T-Mat Global，获取免费的 DevOps 和云安全评估，或了解 CI/CD、云平台及生产运维支持服务。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/contact/",
    languages: {
      en: "https://www.t-matglobal.com/contact/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/contact/",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero firstWord="联系" restOfTitle="我们" bgVariant="network" />

      <section className="bg-brand-grey py-20">
        <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-brand-black sm:text-4xl">
            预约<span className="text-brand-accent">产品演示</span>
          </h2>
          <p className="mt-4 font-body text-base text-brand-black/70">
            选择适合您的时间，我们将向您介绍 T-Mat Global 如何保护您的软件交付流水线。
          </p>
          <div className="mt-10 text-left">
            <CalendlyEmbed locale="zh-CN" />
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-white py-20">
        <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-brand-black sm:text-4xl">
                立即<span className="text-brand-accent">联系我们</span>
              </h2>

              <Image
                src="/illustrations/support.svg"
                alt="客户支持工程师通话插图"
                width={600}
                height={480}
                className="mt-8 h-auto w-full max-w-md"
              />

              <div className="mt-10">
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-brand-black/50">
                  联系方式
                </h2>

                <div className="mt-4 space-y-4">
                  <a
                    href="mailto:info@t-matglobal.com"
                    className="flex items-center gap-3 font-body text-base text-brand-black/80 transition-colors hover:text-brand-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-grey">
                      <Mail className="h-5 w-5 text-brand-accent" />
                    </span>
                    info@t-matglobal.com
                  </a>

                  <a
                    href="tel:+919356307015"
                    className="flex items-center gap-3 font-body text-base text-brand-black/80 transition-colors hover:text-brand-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-grey">
                      <Phone className="h-5 w-5 text-brand-accent" />
                    </span>
                    +91 9356307015
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm locale="zh-CN" />
            </div>
          </div>
        </ScrollFadeIn>
      </section>
    </>
  );
}
