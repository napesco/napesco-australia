import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="NAPESCO Australia"
              width={64}
              height={64}
              priority
            />
            <div>
              <h1 className="text-xl font-semibold">NAPESCO Australia Pty Ltd</h1>
              <p className="text-sm text-slate-500">
                OCTG machining • bucking • repair — Darwin, NT 0800
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-700">
              Darwin, Northern Territory • Operator-facing workshop services
            </div>

            <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight">
              Local OCTG machining, bucking & repair — built for Northern Australia.
            </h2>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
              NAPESCO Australia provides precision OCTG machining, bucking, and repair services from
              Darwin. The facility supports drilling, workover, and intervention operations by
              reducing logistics exposure, turnaround time, and tubular integrity risk associated
              with long-distance pipe movements.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Reduced logistics complexity",
                "Faster turnaround",
                "Integrity-first workflows",
                "Major-operator mindset",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white border px-3 py-1 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Quick RFQ</h3>
              <p className="mt-1 text-sm text-slate-600">
                Send a short scope and we’ll respond with capability and a practical path to execution.
              </p>

              <div className="mt-4 grid gap-3">
                <input
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  placeholder="Company / contact name"
                />
                <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Email" />
                <input
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  placeholder="Scope (machining, bucking, repair)"
                />
                <textarea
                  className="w-full min-h-[120px] rounded-xl border px-4 py-3 text-sm"
                  placeholder="Pipe size, connection type, quantity, required turnaround, constraints"
                />
                <a
                  href="mailto:admin@napesco.com.au?subject=RFQ%20-%20NAPESCO%20Australia"
                  className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Email RFQ to admin@napesco.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-14 px-6">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl font-semibold">Services</h3>
          <p className="mt-2 max-w-2xl text-slate-600">
            Core workshop services designed around rig and yard realities.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Precision OCTG machining",
                desc: "Controlled machining processes supporting fit-up quality, repeatability, and operator expectations.",
              },
              {
                title: "Bucking & make-up support",
                desc: "Handling discipline and preparation to reduce connection damage risk and non-productive time (NPT).",
              },
              {
                title: "Repair & reconditioning",
                desc: "Inspection-led repair workflows to restore tubular integrity and extend service life.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border p-6 shadow-sm">
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-slate-600">
              For quotes and enquiries, email us with the scope and required turnaround.
            </p>

            <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-slate-700">
                <span className="font-semibold">NAPESCO Australia Pty Ltd</span>
                <br />
                17 Toupein Road, Darwin NT 0800
                <br />
                Northern Territory, Australia
              </p>

              <p className="mt-4 text-slate-700">
                <span className="font-semibold">Email:</span>{" "}
                <a className="text-blue-700 underline" href="mailto:admin@napesco.com.au">
                  admin@napesco.com.au
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold">Add next</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>• Facility photos (yard + workshop)</li>
                <li>• Darwin / Timor Sea proximity map</li>
                <li>• Quality Policy PDF + HSE statement</li>
                <li>• Capability Statement download</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} NAPESCO Australia Pty Ltd. All rights reserved.
      </footer>
    </main>
  );
}
