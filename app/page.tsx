"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const screenshots = [
  {
    src: "/01-calendar.png",
    alt: "Calendar overview inside The 15 Minute App",
  },
  {
    src: "/02-day-1.png",
    alt: "Daily timeline view in The 15 Minute App",
  },
  {
    src: "/03-cards.png",
    alt: "Activity cards for tracking time blocks",
  },
  {
    src: "/04-full-day.png",
    alt: "Full-day breakdown in 15-minute intervals",
  },
  {
    src: "/05-account.png",
    alt: "Account and settings screen in The 15 Minute App",
  },
];

const features = [
  "Track time and activities in 15-minute slots",
  "Spot recurring time leaks across your routine",
  "Build a clearer picture of your productive weeks",
];

const storeLinks = [
  {
    href: "https://apps.apple.com/us/app/the-15-minute-app/id6758582286",
    label: "App Store",
    eyebrow: "iOS",
  },
  {
    href: "https://play.google.com/store/apps/details?id=hu.novanet.the15minuteapp",
    label: "Google Play",
    eyebrow: "Android",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111111] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-6 sm:pt-10"
        >
          <div className="mb-10 flex items-center gap-4 text-white/55 sm:mb-14 sm:gap-8">
            <span className="h-px flex-1 bg-white/35" />
            <div className="font-mono text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-[-0.08em]">
              <span className="inline-flex gap-[-0.1em] text-[#F54F1B]">
                <span>/</span>
                <span className="-ml-[0.2em]">/</span>
              </span>
              <span className="inline-flex gap-[-0.1em] text-white">
                <span>1</span>
                <span className="-ml-[0.16em]">5</span>
              </span>
            </div>
            <span className="h-px flex-1 bg-white/35" />
          </div>

          <div className="max-w-3xl space-y-5 mx-auto">
            <p className="font-mono text-xs uppercase text-[#F54F1B] text-center sm:text-sm">
              The 15 Minute App
            </p>
            <h1 className="font-mono text-2xl leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Find the time leaks hiding in your day.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              An app for tracking your time and activities in 15-minute slots.
              The goal is to find the time leaks on your day, which
              prevents you from maximising your productive output cumulated over the
              weeks.
            </p>
            <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              If you are not familiar with the 15-minute theory, please check
              the{" "}
              <a
                href="https://www.youtube.com/shorts/om_6WSfRLZ8"
                target="_blank"
                rel="noreferrer"
                className="text-[#F54F1B] underline decoration-[#F54F1B]/50 underline-offset-4 transition-colors hover:text-[#F54F1B]"
              >
                15-minute rule YouTube video
              </a>
              .
            </p>
          </div>
        </motion.header>

        <section className="max-w-xl w-full mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="space-y-8"
          >
            <div className="mt-10 flex mx-auto justify-center flex-row gap-3">
              {storeLinks.map((store) => (
                <a
                  key={store.href}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group max-w-m items-center justify-center gap-2 border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <p className="font-mono text-med uppercase tracking-[0.24em] text-[#F54F1B]">
                    {store.eyebrow}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="w-full flex flex-col mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="space-y-8"
          >    
            <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
              {screenshots.map((shot, index) => (
                <div
                  key={shot.src}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1a1a] lg:flex-1"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={2400}
                    className="h-auto w-full object-cover"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>

          </motion.div>

        </section>

        <footer className="py-6">
          <div className="flex flex-col gap-3 text-sm text-white/70 sm:flex-row items-center mx-auto justify-center">
            <p>Created by </p>
            <Link
              href="https://novanet.hu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white transition-colors hover:text-[#F54F1B]"
            >
              <Image
                src="/novanet-logo.svg"
                alt="NovaNet logo"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span>NovaNet</span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}