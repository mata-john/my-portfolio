const contactDetails = [
  {
    label: "Name",
    value: "Johnjayferson Mata",
  },
  {
    label: "Email",
    value: "johnjayferson2@gmail.com",
  },
  {
    label: "Location",
    value: "Taguig, Philippines",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mata-john",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnjayferson",
  },
  {
    label: "Email Me",
    href: "mailto:johnjayferson2@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <h2
          id="contact-title"
          className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          Let&apos;s Connect
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          I&apos;m open to junior full-stack developer opportunities and would
          be glad to connect with recruiters, employers, and teams looking for a
          motivated developer who enjoys building practical software.
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
              Contact Information
            </h3>
            <dl className="mt-5 space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-800">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
              Professional Links
            </h3>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-zinc-950">Resume</h3>
              <a
                href="/resume.pdf"
                download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
