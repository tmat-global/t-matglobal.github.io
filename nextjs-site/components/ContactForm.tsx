"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const CONTACT_EMAIL = "info@t-matglobal.com";

export default function ContactForm({
  locale = "en",
}: {
  locale?: "en" | "zh-CN";
}) {
  const isChinese = locale === "zh-CN";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const subject = isChinese
        ? `网站咨询：${name}`
        : `Website inquiry from ${name}`;
      const body = `${message}\n\n— ${name} (${email})`;
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage(
        isChinese ? "发生错误，请重试。" : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border-2 border-brand-green bg-white p-8 text-center">
        <p className="font-heading text-lg font-bold uppercase text-brand-accent">
          {isChinese ? "即将完成" : "Almost There"}
        </p>
        <p className="mt-2 font-body text-brand-black/70">
          {isChinese
            ? "您的电子邮件应用应该已打开，并自动填写了您的消息。请点击发送。如果没有打开，请直接发送邮件至"
            : "Your email app should have opened with your message pre-filled — just hit send. If it didn't open, email us directly at"}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
            {CONTACT_EMAIL}
          </a>
          。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border-2 border-brand-green bg-white p-8"
    >
      <h3 className="font-heading text-xl font-bold uppercase text-brand-black">
        {isChinese ? "联系我们" : "Contact Us"}
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="font-body text-sm font-semibold text-brand-black"
          >
            {isChinese ? "姓名" : "Full Name"}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded border border-brand-black/20 px-4 py-3 font-body text-brand-black focus:border-brand-green focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-body text-sm font-semibold text-brand-black"
          >
            {isChinese ? "电子邮箱" : "Email"}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border border-brand-black/20 px-4 py-3 font-body text-brand-black focus:border-brand-green focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-body text-sm font-semibold text-brand-black"
          >
            {isChinese ? "留言内容" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded border border-brand-black/20 px-4 py-3 font-body text-brand-black focus:border-brand-green focus:outline-none"
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-4 font-body text-sm text-red-600">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded border-2 border-brand-green px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-brand-accent transition-colors hover:bg-brand-green hover:text-brand-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? isChinese ? "正在提交..." : "Submitting..."
          : isChinese ? "提交" : "Submit"}
      </button>
    </form>
  );
}
