
function OurValues() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Values</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-3xl bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h4 className="text-xl sm:text-2xl font-semibold mb-3">Quality</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We believe every customer deserves products they can trust.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-3xl bg-amber-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h4 className="text-xl sm:text-2xl font-semibold mb-3">Transparency</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Honest pricing, clear policies, and no hidden surprises.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-3xl bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h4 className="text-xl sm:text-2xl font-semibold mb-3">Innovation</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We continuously improve our shopping experience through technology and customer feedback.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurValues