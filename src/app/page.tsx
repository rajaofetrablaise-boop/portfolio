"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { projects } from "@/data/projects";
import { tools } from "@/lib/dictionary";
import { ShotsCarousel } from "@/components/shots-carousel";
import { AnimatedNumber } from "@/components/animated-number";
import { Reveal } from "@/components/reveal";
import { HoverCursor } from "@/components/hover-cursor";
import { Testimonials } from "@/components/testimonials";
import { CvModalButton } from "@/components/cv-modal-button";
import { Parallax } from "@/components/parallax";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <section className="relative -mt-20 flex flex-col justify-center overflow-hidden">

        <Reveal className="mx-auto w-full max-w-6xl 2xl:max-w-7xl px-6 py-32 sm:py-40">
          <p className="text-lg font-medium text-accent">{t.hero.kicker}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t.hero.bio.split("\n").map((line, i, lines) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-8 flex items-center gap-1.5 text-base text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t.hero.location}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://calendly.com/abrajaofetra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 bg-[#15616D] px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              {t.hero.ctaPrimary}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-0 -translate-x-2 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </a>
            <Link
              href="#work"
              className="w-full bg-white px-8 py-4 text-center text-base font-medium text-[#15616D] transition-opacity hover:opacity-70 sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <ShotsCarousel />
        </Reveal>
      </section>

      <section className="border-t border-border py-32 sm:py-40">
        <Reveal className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-foreground">{t.home.statsHeading}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {t.home.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 150}>
                <div className="border-b border-border pb-8 sm:border-b-0 sm:pb-0">
                  <AnimatedNumber
                    value={stat.value}
                    step={stat.value === "80+" ? 10 : 1}
                    className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl"
                  />
                  <p className="mt-2 text-base text-zinc-800">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="work" className="scroll-mt-20 bg-[#ececee] py-32 sm:py-40">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-foreground">{t.home.caseStudiesHeading}</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <Reveal key={project.slug} delay={i * 120}>
                <Link
                  href={project.externalUrl ?? "#work"}
                  target={project.externalUrl ? "_blank" : undefined}
                  rel={project.externalUrl ? "noopener noreferrer" : undefined}
                  className="group block"
                >
                  <HoverCursor
                    label={t.home.viewProject}
                    className="aspect-[4/3] w-full overflow-hidden"
                  >
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 472px, 45vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                        }}
                      />
                    )}
                  </HoverCursor>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">{project.title[lang]}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-zinc-400 px-4 py-1.5 text-sm text-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-32">
        <Parallax strength={50} className="absolute -inset-y-16 inset-x-0">
          <Image src="/quotebackground.png?v=5" alt="" fill className="object-cover" />
        </Parallax>
        <Reveal className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6">
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 191.029 191.029"
            fill="currentColor"
            className="h-8 w-8 text-[#15616D] sm:h-10 sm:w-10"
          >
            <path d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474C152.613,48.759,171.149,48.759,181.107,48.759z" />
          </svg>
          <p className="mt-10 text-2xl font-medium text-white sm:text-3xl">
            Design is not just what it looks like and feels like.
            <br />
            <span className="font-serif italic">Design is how it works.</span>
          </p>
          <p className="mt-6 text-sm font-medium text-zinc-400">— Steve Jobs</p>
        </Reveal>
      </section>

      <section id="about" className="scroll-mt-20 pt-40 pb-40">
        <Reveal className="mx-auto grid max-w-6xl 2xl:max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 sm:gap-16">
          <div className="flex flex-col sm:h-full sm:justify-center">
            <h2 className="text-3xl font-semibold text-foreground">{t.about.heading}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.about.intro}</p>
            <div className="mt-14 grid grid-cols-[60%_1fr] gap-8">
              <Reveal delay={0}>
                <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  {t.about.skillsHeading}
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted">
                  {t.about.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#15616D]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  {t.about.toolsHeading}
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted">
                  {tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#15616D]" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <CvModalButton label={t.home.aboutCta} />
          </div>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image src="/about.png?v=2" alt="" fill sizes="(min-width: 640px) 45vw, 90vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="pb-40">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-foreground">{t.home.pricingHeading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 250}>
                <div className={`flex flex-col p-8 pt-12 pb-12 ${i === 1 ? "bg-black" : "bg-[#ececee]"}`}>
                  <h3 className={`text-xl font-bold ${i === 1 ? "text-white" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-6 text-sm ${
                      i === 0 ? "text-transparent" : i === 1 ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {plan.pricePrefix}
                  </p>
                  <p className={`mt-1 text-4xl font-extrabold ${i === 1 ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </p>
                  <p className={`mt-3 text-sm ${i === 1 ? "text-white/70" : "text-muted"}`}>
                    {plan.description}
                  </p>
                  <a
                    href="https://calendly.com/abrajaofetra/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-10 flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-medium ${
                      i === 1
                        ? "bg-[#15616D] text-white transition-opacity hover:opacity-70"
                        : "bg-white text-[#15616D]"
                    }`}
                  >
                    {t.home.pricingCta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-0 -translate-x-2 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </a>
                  <ul className="mt-10 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-2 text-sm ${i === 1 ? "text-white" : "text-foreground"}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 text-accent"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <Testimonials />
      </Reveal>
    </div>
  );
}
