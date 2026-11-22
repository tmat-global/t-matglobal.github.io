import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";
import TechBackground from "@/components/hero-bg/TechBackground";
import {
  Workflow,
  ShieldAlert,
  Gauge,
  Activity,
  ListChecks,
  Clock,
  Plug,
  Radar,
  ClipboardList,
} from "lucide-react";

const TITLE = "VaultRak | 托管式 DevSecOps 平台";
const DESCRIPTION =
  "VaultRak 提供 CI/CD 流水线安全可视化、基于严重程度的漏洞管理和合规评分跟踪，并由 T-Mat Global 的托管团队提供支持。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/vaultrak/",
    languages: {
      en: "https://www.t-matglobal.com/vaultrak/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/vaultrak/",
    },
  },
};

const FEATURES = [
  {
    Icon: Workflow,
    title: "流水线安全可视化",
    description:
      "查看 CI/CD 流水线的每个阶段，包括源代码、构建、测试、扫描和部署。每个步骤的安全状态都清晰呈现，而不是隐藏在构建日志中。",
  },
  {
    Icon: ShieldAlert,
    title: "按严重程度管理漏洞",
    description:
      "根据实际可利用性和业务影响对发现的问题进行分类，帮助团队优先修复真正重要的风险，而不是逐一追逐低严重性警报。",
  },
  {
    Icon: Gauge,
    title: "合规评分跟踪",
    description:
      "根据 SOC 2 和 ISO 27001 等框架提供实时合规评分，并利用 VaultRak 从现有工具中自动收集的证据进行评估。",
  },
  {
    Icon: Activity,
    title: "实时监控",
    description:
      "持续监控流水线、基础设施和安全状况。随着环境变化及时更新，而不是依赖每周一次的扫描。",
  },
  {
    Icon: ListChecks,
    title: "问题跟踪与修复流程",
    description:
      "从发现到解决，全程跟踪每个问题，并提供明确的负责人、处理状态和审计记录，方便团队用于审计。",
  },
  {
    Icon: Clock,
    title: "全天候托管运维支持",
    description:
      "VaultRak 不仅是一款软件，还由 T-Mat Global 的托管式 DevSecOps 团队提供支持，全天候关注您的环境。",
  },
];

const STEPS = [
  {
    number: 1,
    Icon: Plug,
    title: "连接您的流水线",
    description:
      "只需几分钟即可连接 CI/CD 工具、云账户和代码仓库，并采用只读范围及最小权限访问方式。",
  },
  {
    number: 2,
    Icon: Radar,
    title: "VaultRak 持续监控",
    description:
      "自动扫描、安全态势跟踪和合规证据收集全天候运行，无需人工触发。",
  },
  {
    number: 3,
    Icon: ClipboardList,
    title: "获取优先级明确的问题",
    description:
      "每个发现的问题都会进行评分、跟踪并分配给相应负责人，同时提供清晰的修复建议和状态信息。",
  },
];

export default function VaultRakPage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-black">
        <TechBackground variant="vault" />

        <ScrollFadeIn className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            托管式 DevSecOps 平台
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
            Vault<span className="text-brand-green-light">Rak</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/80">
            持续掌握流水线安全状态、漏洞管理和合规评分，并由 T-Mat
            Global 的 24/7 托管式 DevSecOps 团队提供支持。
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://vaultrak.t-matglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block"
            >
              启动 VaultRak
            </a>

            <Link
              href="/zh-cn/schedule-demo/"
              className="block rounded border-2 border-white px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand-black sm:inline-block"
            >
              预约产品演示
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
              团队所需的一切，尽在
              <span className="text-brand-accent"> 一个平台</span>
            </h2>
          </ScrollFadeIn>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, description }, i) => (
              <ScrollFadeIn
                key={title}
                delayMs={(i % 3) * 100}
                className="rounded-lg border border-black/5 bg-brand-grey p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green">
                  <Icon className="h-6 w-6 text-brand-black" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-brand-black">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-black/70">
                  {description}
                </p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
              工作<span className="text-brand-accent">流程</span>
            </h2>
          </ScrollFadeIn>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {STEPS.map(({ number, Icon, title, description }, i) => (
              <ScrollFadeIn
                key={number}
                delayMs={i * 100}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green">
                  <Icon className="h-7 w-7 text-brand-black" />
                </div>
                <p className="mt-4 font-heading text-sm font-bold uppercase tracking-widest text-brand-accent">
                  步骤 {number}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-brand-black">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-black/70">
                  {description}
                </p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            查看 <span className="text-brand-green-light">VaultRak</span>
            实际运行效果
          </h2>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
            <div className="flex items-center gap-2 bg-[#0B0D10] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <div className="ml-3 h-5 flex-1 rounded bg-white/10" />
            </div>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/vaultrak.png"
                alt="VaultRak 仪表板，展示漏洞数量、流水线安全状态、合规评分和近期发现的问题"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-brand-green py-16">
        <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand-black sm:text-3xl">
            在您的流水线中体验 VaultRak
          </h2>
          <Link
            href="/zh-cn/schedule-demo/"
            className="mt-8 block w-full rounded bg-brand-black px-10 py-5 text-center font-heading text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-black sm:inline-block sm:w-auto sm:text-xl"
          >
            预约产品演示
          </Link>
        </ScrollFadeIn>
      </section>
    </>
  );
}
