import { useInView } from "@/hooks/useInView";

export default function ContactDetails() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Corporate Contact Details
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Neumantra Capital Advisors
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-primary mb-3">Address</h4>
                <p className="text-gray-700">
                  [Office Address Line 1]<br />
                  [Office Address Line 2]<br />
                  [City, State, PIN Code]
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">Email</h4>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">General Inquiries:</span><br />
                  contact@neumantra.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">New Client Inquiries:</span><br />
                  engage@neumantra.com
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">Phone</h4>
                <p className="text-gray-700">
                  +91-[XX]-XXXX-XXXX
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3">Office Hours</h4>
                <p className="text-gray-700">
                  Monday–Friday: 9:30 AM – 6:00 PM IST
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-fit">
            <h4 className="font-bold text-primary mb-4 text-lg">Connect With Us</h4>
            
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors group"
              >
                <svg
                  className="w-6 h-6 group-hover:text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                <span>Follow us on LinkedIn</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors group"
              >
                <svg
                  className="w-6 h-6 group-hover:text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.807-5.972 6.807H2.882l7.532-8.614L1.408 2.25h6.838l4.972 6.572L18.244 2.25zM17.474 20.451h1.829L6.75 3.75H4.800l12.674 16.701z" />
                </svg>
                <span>Follow on X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
