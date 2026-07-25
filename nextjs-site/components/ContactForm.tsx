"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border-2 border-brand-green bg-white p-8 text-center">
        <p className="font-heading text-lg font-bold uppercase text-brand-accent">
          Thanks &mdash; Message Received
        </p>
        <p className="mt-2 font-body text-brand-black/70">
          We&apos;ll get back to you shortly.
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
        Contact Us
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="font-body text-sm font-semibold text-brand-black"
          >
            Full Name
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
            Email
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
            Message
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
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
