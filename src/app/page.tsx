/* eslint-disable @next/next/no-img-element */

const DEMO_IFRAME_URL =
  process.env.NEXT_PUBLIC_FLEXIPAY_DEMO_URL || "http://localhost:4242/demo.html";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_FLEXIPAY_CALENDLY_URL || "https://calendly.com/";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-zinc-200 via-white to-zinc-200 blur-3xl opacity-70" />
        <div className="absolute bottom-[-240px] right-[-220px] h-[520px] w-[520px] rounded-full bg-zinc-100 blur-3xl opacity-80" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-black" />
          <div>
            <div className="font-semibold tracking-tight">Flexipay</div>
            <div className="text-xs text-zinc-500">BNPL widget</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a href="#demo" className="hover:text-zinc-900">Demo</a>
          <a href="#features" className="hover:text-zinc-900">API</a>
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Book a demo
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600">
              BNPL Widget • 2x 50/50 • automatic
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Payment{" "}
              <span className="relative">
                <span className="absolute -inset-2 -z-10 rounded-3xl bg-zinc-100" />
                in two
              </span>{" "}
              to boost your conversions
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-600">
              Flexipay allows your customers to pay 50% now and 50% in 30 days.
              Integration in minutes, without redoing your checkout.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Book a demo
              </a>
              <a
                href="#demo"
                className="rounded-2xl border border-zinc-200 bg-white/70 px-6 py-3 text-sm font-medium hover:bg-zinc-50"
              >
                View demo
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-zinc-600">
              <Stat label="Setup" value="10 min" />
              <Stat label="Payment" value="Stripe" />
              <Stat label="Widget" value="Embeddable" />
            </div>
          </div>

          {/* Right — Checkout overview */}
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="mb-4 text-sm font-medium">Checkout overview</div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              {/* Product */}
              <div className="flex items-center gap-4">
                <img
                  src="/sneaker.avif"
                  alt="Sneakers"
                  className="h-20 w-20 rounded-xl object-cover border border-zinc-200"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Sneakers</div>
                  <div className="text-xs text-zinc-500">Premium edition</div>
                </div>
                <div className="text-sm font-semibold">€129.90</div>
              </div>

              {/* BNPL box */}
              <div className="mt-4 rounded-xl border border-zinc-200 p-4">
                <div className="text-sm font-semibold">
                  Pay in two instalments
                </div>

                <div className="mt-2 space-y-1 text-xs text-zinc-600">
                  <div>
                    • Today: <b>€64.95</b>
                  </div>
                  <div>
                    • In 30 days: <b>€64.95</b>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-xl bg-black py-3 text-sm font-medium text-white hover:opacity-90">
                  Pay 50% now
                </button>

                <div className="mt-2 text-center text-[11px] text-zinc-500">
                  Secured payment • Powered by Flexipay
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-4 text-3xl font-semibold">Live demo</h2>
        <p className="mb-6 text-zinc-600">
          The Flexipay widget integrated as on a real merchant site.
        </p>

        <div className="overflow-hidden rounded-3xl border border-zinc-200">
          <iframe
            src={DEMO_IFRAME_URL}
            className="h-[560px] w-full"
            title="Flexipay demo"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Flexipay — All rights reserved
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white/70 p-3">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
