import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";

export default function LeadershipTeam() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const leaders = [
    {
      name: "Vinay Pandya",
      title: "Founding Partner",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fed6f9b50ce9e472d936002b43f4ca331?format=webp&width=800&height=1200",
      bio: "Vinay Pandya is a Chartered Accountant (ICAI), Company Secretary, and Registered Valuer, and has completed the Strategic Management Programme at IIM Ahmedabad. He brings over three decades of leadership experience across corporate finance, investor relations, and transaction advisory.\n\nHe has served as Group CFO of the Ashok Piramal Group, where he also led the Investor Relations Cell, working closely with promoters, boards, and investors. His earlier roles include CFO at Ciba Geigy – Lalbhai JV and CFO at Mitsu Ltd / Bilag Ltd (JV). Vinay has also served as an Ex-Board Advisor to Meril Life Sciences.\n\nVinay is the Founder and Managing Partner of Mantraa Advisory Services, where he has advised on 40+ CFO services engagements, 20+ mergers and acquisitions transactions, and 140+ startup mentoring assignments. He has played a key role in several large and complex M&A transactions, including landmark deals in the ink, packaging, and paper industries.\n\nHe has built strategic alliances with merchant bankers, brokerage houses, and influential investors, supporting businesses across growth, transactions, and capital markets preparation.",
    },
    {
      name: "Kartik R. Upadhyay",
      title: "Founding Partner",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2F621078cae5bf4a62b6c486e38f6668d2?format=webp&width=800&height=1200",
      bio: "Kartik Upadhyay brings over 30 years of experience in strategic communications and stakeholder engagement. He is the Founder Director of Neubright Partners, where he has advised leadership teams on reputation management, IPO communications, governance transitions, and ESG integration.\n\nHis client experience spans industries and organisations across the full spectrum — from start-ups to legacy enterprises — with recognised capability in crafting stakeholder strategies for complex, multi-audience environments.\n\nKartik has led investor relations campaigns for IPOs, including shareholder and analyst outreach, and has held senior leadership roles as Head of Corporate Communications and Public Affairs at HCC Ltd, Lavasa Corporation, YES Bank, and Otis Elevators.\n\nWith formal training through the Advanced Management Programme in Public Policy at ISB, he brings public policy and legal expertise and has been actively involved in mentoring and guiding young professionals in the communications and public affairs industry.",
    },
    {
      name: "Prasanna Upadhyay",
      title: "Partner",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2F0b6519e64c6c42209b2951b91a1c9cfa?format=webp&width=800&height=1200",
      bio: "Prasanna Upadhyay has over 25 years of experience in content development, corporate communications, CSR, and investor relations. She brings strong expertise in research, analysis, and due diligence for private equity and investment funds.\n\nA former journalist, Prasanna has worked with leading media houses including The Indian Express, Financial Express, and Asian Age. She has led communications, investor relations, CSR, and sustainability reporting initiatives at Ambuja Cements, Ashok Piramal Group, and TCG Real Estate.",
    },
    {
      name: "Dharini Desai",
      title: "Partner",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fd2aa0f47428d4e41b6bd82e9f58c609b?format=webp&width=800&height=1200",
      bio: "Dharini Desai has over 10 years of experience in financial advisory and CFO consulting. She has strong expertise in strategy, planning, and resource optimisation, and is skilled at driving growth, improving financial performance, and enhancing profitability.\n\nHer work reflects a proven track record of delivering sustainable results and long-term success across client engagements.",
    },
    {
      name: "Khushbu Singh",
      title: "Partner",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fb34be88f4b824f81973b485e69731337?format=webp&width=800&height=1200",
      bio: "Khushbu brings a strong blend of analytical training and market-facing experience to Neumantra. She began her career through a campus placement with Business Standard and has held senior roles at Standard Chartered Bank and HDFC Bank, where she worked closely with premium client segments and relationship teams. She holds a B.Sc. in Electronics and an MBA in Marketing.",
    },
  ];

  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Leadership Team
          </h2>
          <SectionDivider />
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            Decades of expertise in capital markets, finance, and stakeholder
            engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              onClick={() => setExpandedId(expandedId === index ? null : index)}
              className="backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:border-white/100 overflow-hidden"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div
                    className={`w-32 h-32 rounded-full bg-white/30 border-2 border-white/80 overflow-hidden backdrop-blur-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-accent/50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-2">
                  {leader.title}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                  {expandedId === index ? "Read Less" : "Read More"}
                </div>
              </div>

              {/* Bio - Expandable */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedId === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-gray-300/30 text-gray-700 text-xs leading-relaxed space-y-3">
                  {leader.bio.split("\n").map(
                    (paragraph, idx) =>
                      paragraph.trim() && (
                        <p key={idx} className="animate-fadeIn">
                          {paragraph.trim()}
                        </p>
                      ),
                  )}
                </div>
              </div>

              {/* Expand indicator */}
              {expandedId !== index && (
                <div className="text-center pt-3 border-t border-gray-300/30">
                  <svg
                    className="w-5 h-5 mx-auto text-gray-400 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fadeIn:nth-child(2) {
          animation-delay: 0.05s;
        }

        .animate-fadeIn:nth-child(3) {
          animation-delay: 0.1s;
        }

        .animate-fadeIn:nth-child(4) {
          animation-delay: 0.15s;
        }

        .animate-fadeIn:nth-child(5) {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
