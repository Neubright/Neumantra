import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import SectionDivider from "../ui/SectionDivider";

export default function Newsletter() {
  const [ref, isInView] = useInView();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Stay Informed
        </h2>
        <SectionDivider />
        <p className="text-gray-700 text-base mb-8 max-w-4xl mx-auto mt-6">
          Subscribe to receive insights, resources, and updates from the Neumantra team. We share perspectives on capital markets readiness, investor relations best practices, and stakeholder engagement strategies for growth companies.
        </p>

        <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-accent bg-white/80"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {submitted && (
              <p className="text-accent font-semibold text-sm mb-3">
                Thank you for subscribing!
              </p>
            )}

            <p className="text-gray-600 text-sm">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
