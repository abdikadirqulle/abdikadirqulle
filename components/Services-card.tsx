export default function ServicesCard() {
  return (
    <div className="w-full">
      <h2 className="text-sm font-medium tracking-wide text-neutral-400">
        Services
      </h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cal.com/abdikadirqulle/discovery-call"
          className="group rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:bg-neutral-50"
        >
          <p className="text-sm font-medium text-neutral-900">Hire me</p>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">
            Production-ready websites and software for your next product or
            organisation.
          </p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cal.com/abdikadirqulle/consultation"
          className="group rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:bg-neutral-50"
        >
          <p className="text-sm font-medium text-neutral-900">
            Book a consultation
          </p>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">
            Need clarity on your product or stack? Book a short session and we
            map the next steps.
          </p>
        </a>
      </div>
    </div>
  )
}
