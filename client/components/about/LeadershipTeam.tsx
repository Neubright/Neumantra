import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Vinay Kanbya",
      title: "Lead Advisor",
      bio: "Well in financial strategy, listing domain outreach and client management. Advise India's mid-market capital market firms. Has led corporate investor relations through comprehensive capital and investor relations initiatives. Serial advisor to clients for multi-disciplinary decision-making and integration leadership."
    },
    {
      name: "Kartik & Gaudhary",
      title: "Operating Partner",
      bio: "Healthcare leadership with a track record in communications and engagement. Invest in growth-stage companies across capital markets, capital advisory, and corporate strategy. Brings deep expertise across investor relations, strategic communications, and financial advisory."
    },
    {
      name: "Prasanna",
      title: "Senior Advisor",
      bio: "Financial strategy and management expertise across investor relations and capital markets. Brings deep understanding of institutional investor needs and capital efficiency. Built market presence and investor confidence for multiple high-growth companies."
    },
    {
      name: "Bharati",
      title: "Senior Advisor",
      bio: "Leads internal engagement and communications across enterprise operations and investor strategy. Specializing in R&D integration and sustainability communications. Brings 20+ years of experience in strategic communications, marketing and investor relations."
    },
    {
      name: "Khildu",
      title: "Senior Advisor",
      bio: "Senior banking and asset-light business experience. Specializing in corporate governance, financial reporting, and compliance communications. Brings extensive experience in securities regulations, capital markets compliance, and investor-focused compliance communications."
    }
  ];

  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-primary text-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Leadership Team
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white text-primary rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
              <p className="text-accent font-semibold text-sm mb-4">{leader.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
