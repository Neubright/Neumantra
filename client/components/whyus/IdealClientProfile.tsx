import { useInView } from "@/hooks/useInView";

export default function IdealClientProfile() {
  const [ref, isInView] = useInView();

  const idealClients = [
    "Are mid-market size (₹500-10,000 crore revenue or market cap range)",
    "Have strong business fundamentals deserving better market recognition",
    "Are preparing for listing, transitioning from SME, or seeking enhanced IR for existing listing",
    "Value strategic counsel over tactical execution services alone",
    "Are committed to governance strengthening and professional market engagement",
    "Expect accountability, transparency, and measurable outcomes from advisors",
  ];

  const notIdeal = [
    "Your primary need is compliance support or regulatory filing services",
    "You seek the brand name of Big Four over specialized mid-market expertise",
    "You prefer standardized solutions over custom strategy development",
    "You are not willing to invest leadership time in IR capability building",
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-gray-50 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Is Neumantra Right for Your Company?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Ideal Client Profile</h3>
            <p className="text-gray-700 mb-6 font-semibold">
              Neumantra delivers maximum value for companies that:
            </p>
            <ul className="space-y-3">
              {idealClients.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Not Ideal If:</h3>
            <ul className="space-y-4">
              {notIdeal.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-red-600 mr-3 text-xl font-bold flex-shrink-0">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
