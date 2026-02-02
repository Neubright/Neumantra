import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Vinay Pandya",
      title: "Founding Partner",
      bio: "Vinay Pandya is a Chartered Accountant (ICAI), Company Secretary, and Registered Valuer, and has completed the Strategic Management Programme at IIM Ahmedabad. He brings over three decades of leadership experience across corporate finance, investor relations, and transaction advisory.\n\nHe has served as Group CFO of the Ashok Piramal Group, where he also led the Investor Relations Cell, working closely with promoters, boards, and investors. His earlier roles include CFO at Ciba Geigy – Lalbhai JV and CFO at Mitsu Ltd / Bilag Ltd (JV). Vinay has also served as an Ex-Board Advisor to Meril Life Sciences.\n\nVinay is the Founder and Managing Partner of Mantraa Advisory Services, where he has advised on 40+ CFO services engagements, 20+ mergers and acquisitions transactions, and 140+ startup mentoring assignments. He has played a key role in several large and complex M&A transactions, including landmark deals in the ink, packaging, and paper industries.\n\nHe has built strategic alliances with merchant bankers, brokerage houses, and influential investors, supporting businesses across growth, transactions, and capital markets preparation."
    },
    {
      name: "Kartik R. Upadhyay",
      title: "Founding Partner",
      bio: "Kartik Upadhyay brings over 30 years of experience in strategic communications and stakeholder engagement. He is the Founder Director of Neubright Partners, where he has advised leadership teams on reputation management, IPO communications, governance transitions, and ESG integration.\n\nHis client experience spans industries and organisations across the full spectrum — from start-ups to legacy enterprises — with recognised capability in crafting stakeholder strategies for complex, multi-audience environments.\n\nKartik has led investor relations campaigns for IPOs, including shareholder and analyst outreach, and has held senior leadership roles as Head of Corporate Communications and Public Affairs at HCC Ltd, Lavasa Corporation, YES Bank, and Otis Elevators.\n\nWith formal training through the Advanced Management Programme in Public Policy at ISB, he brings public policy and legal expertise and has been actively involved in mentoring and guiding young professionals in the communications and public affairs industry."
    },
    {
      name: "Prasanna Upadhyay",
      title: "Partner",
      bio: "Prasanna Upadhyay has over 25 years of experience in content development, corporate communications, CSR, and investor relations. She brings strong expertise in research, analysis, and due diligence for private equity and investment funds.\n\nA former journalist, Prasanna has worked with leading media houses including The Indian Express, Financial Express, and Asian Age. She has led communications, investor relations, CSR, and sustainability reporting initiatives at Ambuja Cements, Ashok Piramal Group, and TCG Real Estate."
    },
    {
      name: "Dharini Desai",
      title: "Associate Partner",
      bio: "Dharini Desai has over 10 years of experience in financial advisory and CFO consulting. She has strong expertise in strategy, planning, and resource optimisation, and is skilled at driving growth, improving financial performance, and enhancing profitability.\n\nHer work reflects a proven track record of delivering sustainable results and long-term success across client engagements."
    },
    {
      name: "Khushbu Singh",
      title: "Associate",
      bio: "Khushbu brings a strong blend of analytical training and market-facing experience to Neumantra. She began her career through a campus placement with Business Standard and has held senior roles at Standard Chartered Bank and HDFC Bank, where she worked closely with premium client segments and relationship teams. She holds a B.Sc. in Electronics and an MBA in Marketing."
    }
  ];

  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Leadership Team
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white/40 border border-white/80 mb-6 flex items-center justify-center backdrop-blur-xl">
                <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1 text-primary">{leader.name}</h3>
              <p className="text-accent font-semibold text-sm mb-4">{leader.title}</p>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                {leader.bio.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && (
                    <p key={idx}>
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
