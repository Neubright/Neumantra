import { useInView } from "@/hooks/useInView";
import { useState } from "react";

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
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Stay Informed
        </h2>

        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to receive insights, resources, and updates from the Neumantra team. We share perspectives on capital markets readiness, investor relations best practices, and stakeholder engagement strategies for growth companies.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>

          {submitted && (
            <p className="text-accent font-semibold text-sm">
              Thank you for subscribing!
            </p>
          )}

          <p className="text-gray-500 text-sm">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
