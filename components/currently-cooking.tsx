export default function CurrentlyCooking() {
  return (
    <div className="flex w-full flex-col">
      <h2 className="text-sm font-medium tracking-wide text-neutral-400">
        Currently building
      </h2>
      <div className="mt-3 h-px w-full bg-neutral-200" />
      <div className="mt-4 flex w-full flex-col gap-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.exisaabi.app/"
          className="group"
        >
          <p className="text-base font-medium text-neutral-900 group-hover:underline">
            E-xisaabi
          </p>
        </a>
        <p className="text-sm leading-relaxed text-neutral-500">
          Financial management software for smarter business accounting and
          bookkeeping.
        </p>
      </div>
    </div>
  )
}
