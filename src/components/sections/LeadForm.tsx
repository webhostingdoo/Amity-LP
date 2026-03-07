"use client";

export default function LeadForm() {
  return (
    <section
      id="verify-form"
      className="py-20 md:py-28 scroll-mt-24"
      style={{ backgroundColor: "#0a1f35" }}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4 text-center">
          Find Out What You&rsquo;re Covered For — In Minutes
        </h2>
        <hr className="border-t-2 border-gold w-20 mx-auto mb-6" />
        <p className="text-white/75 text-lg leading-relaxed text-center mb-12">
          Fill out the form and one of our admissions coordinators will reach out to confirm your benefits and walk you through your options. Adding your insurance details helps us get you an answer faster.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <input type="hidden" name="retURL" value="https://admissions.dallasdetox.com/" />
          <input type="hidden" name="lead_source" value="Tru Dallas Detox" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Insurance Provider Name
              </label>
              <input
                type="text"
                id="00NDn00000brX5x"
                name="00NDn00000brX5x"
                maxLength={255}
                placeholder="Insurance Provider Name"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Insurance Policy #
              </label>
              <input
                type="text"
                id="00NDn00000brX5Y"
                name="00NDn00000brX5Y"
                maxLength={255}
                placeholder="Insurance Policy #"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Group Number
              </label>
              <input
                type="text"
                id="00NDn00000brX5d"
                name="00NDn00000brX5d"
                maxLength={255}
                placeholder="Group Number"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Insurance Provider Phone
              </label>
              <input
                type="tel"
                id="00NDn00000brX5i"
                name="00NDn00000brX5i"
                maxLength={40}
                placeholder="Insurance Provider Phone"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-2">
              Client&rsquo;s DOB
            </label>
            <input
              type="date"
              id="00NDn00000brX5n"
              name="00NDn00000brX5n"
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
            />
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-2">
              Additional Comments
            </label>
            <textarea
              id="00NDn00000brftN"
              name="00NDn00000brftN"
              rows={4}
              maxLength={220}
              placeholder="Additional Comments"
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded font-semibold text-lg btn-primary transition"
          >
            Check My Coverage
          </button>
        </form>
        <p className="text-center text-white/50 text-sm mt-6">
          100% Confidential &mdash; Responses Within the Hour
        </p>
      </div>
    </section>
  );
}
