import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function HeritagePartners() {
  const [ref, isInView] = useInView();

  const partners = [
    {
      name: "Mantraa Advisory",
      subtitle: "Financial & Strategic Expertise",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2Fde161038493542a5bbd349610b65931a?format=webp&width=800&height=1200",
      color: "from-blue-50 to-blue-100/30",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-100",
      textColor: "text-blue-700",
      items: [
        "Capital structure optimization and valuation analysis",
        "IPO preparation and transaction readiness",
        "Financial reporting frameworks and disclosure enhancement",
        "CFO-level strategic guidance",
        "Board advisory and governance strengthening",
      ],
      description: "Mantraa's track record of supporting companies through complex financial transitions ensures Neumantra's investor relations guidance is grounded in financial substance, not marketing narratives.",
    },
    {
      name: "Neubright Partners",
      subtitle: "Stakeholder Engagement Excellence",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2F9b6912099ccf4aba935a03dc14a8323f?format=webp&width=800&height=1200",
      color: "from-red-50 to-red-100/30",
      borderColor: "border-red-200",
      badgeColor: "bg-red-100",
      textColor: "text-red-700",
      items: [
        "Stakeholder mapping and engagement strategy",
        "Corporate messaging and narrative development",
        "Reputation management and perception tracking",
        "ESG integration and sustainability communication",
        "Crisis preparedness and issue management",
      ],
      description: "Neubright's expertise ensures Neumantra delivers not just accurate information, but compelling, consistent, and credible communication that resonates with institutional investors and analysts.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 text-gray-900 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(165, 35, 35, 0.06) 0%, rgba(15, 37, 71, 0.08) 50%, rgba(165, 35, 35, 0.06) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm mb-4">
            INTEGRATED EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Heritage Partners
          </h2>
          <SectionDivider />
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            Two established practices coming together to serve an underserved market segment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-gradient-to-br ${partner.color} border-2 ${partner.borderColor} rounded-xl p-8 hover:shadow-xl transition-all duration-300`}
            >
              {/* Logo and Title */}
              <div className="mb-6">
                <div className={`backdrop-blur-xl bg-white/40 border ${partner.borderColor} rounded-lg p-4 flex items-center justify-center mb-4 h-16`}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto"
                  />
                </div>
                <h3 className={`text-2xl font-bold ${partner.textColor} mb-1`}>
                  {partner.name}
                </h3>
                <p className={`text-sm font-semibold ${partner.textColor}`}>
                  {partner.subtitle}
                </p>
              </div>

              {/* Intro */}
              <p className={`${partner.textColor.replace("text-", "text-opacity-90 ")} mb-4 font-medium`}>
                {partner.name === "Mantraa Advisory"
                  ? "Mantraa brings rigorous financial advisory credentials to Neumantra's foundation:"
                  : "Neubright contributes sophisticated communication and engagement capabilities:"}
              </p>

              {/* Items List */}
              <ul className="space-y-3 mb-6">
                {partner.items.map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 ${partner.textColor.replace("text-", "text-opacity-80 ")}`}>
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full ${partner.badgeColor} flex items-center justify-center mt-0.5`}>
                      <span className={`text-xs font-bold ${partner.textColor}`}>✓</span>
                    </span>
                    <span className="leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <div className={`pt-6 border-t ${partner.borderColor}`}>
                <p className={`${partner.textColor.replace("text-", "text-opacity-90 ")} text-sm leading-relaxed`}>
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
