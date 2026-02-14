import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";
import { useState } from "react";

export default function ContactFormAndDetails() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    contactMethod: "email",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      contactMethod: "email",
      inquiryType: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inquiryTypes = [
    "Pre-IPO Readiness",
    "SME to Main Board Transition",
    "Ongoing IR for Listed Company",
    "Transaction Support",
    "General Consultation",
    "Speaking/Content Request",
  ];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-18 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(248, 223, 228, 0.6) 50%, rgba(229, 231, 235, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
              Corporate Contact Details
            </h2>

            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-apple transition-all duration-300 hover:bg-white/40 hover:border-white/100">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Neumantra Capital Advisors
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary mb-1">Address</h4>
                    <p className="text-gray-700 text-sm">
                      A 303, Rajkamal CHS
                      <br />
                      Opp. Mumbai University, Vidyanagari
                      <br />
                      Manipada, Kalina, Santacruz East
                      <br />
                      Mumbai – 400098
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-gray-700 text-sm">
                      <a
                        href="mailto:info@mantraa.com"
                        className="hover:text-accent transition-colors"
                      >
                        info@mantraa.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary mb-1">Phone</h4>
                    <p className="text-gray-700 text-sm">
                      <a
                        href="tel:+919326389159"
                        className="hover:text-accent transition-colors"
                      >
                        +91 93263 89159
                      </a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-apple transition-all duration-300 hover:bg-white/40 hover:border-white/100">
                <h4 className="font-bold text-primary mb-4 text-lg">
                  Connect With Us
                </h4>

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
                    <span className="text-sm">Follow us on LinkedIn</span>
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
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.807-5.972 6.807H2.882l7.532-8.614L1.408 2.25h6.838l4.972 6.572L18.244 2.25zM17.474 20.451h1.829L6.75 3.75H4.8l12.674 16.701z" />
                    </svg>
                    <span className="text-sm">Follow on X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
              Contact Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-apple transition-all duration-300 hover:bg-white/40 hover:border-white/100"
            >
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    {["email", "phone", "either"].map((method) => (
                      <label key={method} className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <span className="text-gray-700 text-sm capitalize">
                          {method === "either" ? "Either" : method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Nature of Inquiry
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80 text-sm"
                  >
                    <option value="">Select an inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80 text-sm"
                    placeholder="Tell us about your capital markets objectives..."
                  />
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  className="pl-3 pr-1.5 py-1.5 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-2xl text-primary border-2 border-red-300/60 hover:shadow-apple hover:scale-105 group"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)",
                  }}
                >
                  Submit
                  <span className="flex-shrink-0 bg-primary rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-primary/90 transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc76f1a82d1c747c78df66373da84fda9?format=webp&width=800&height=1200"
                      alt="Arrow"
                      style={{
                        filter: "brightness(0) invert(1)",
                        maxWidth: "14px",
                        maxHeight: "22px",
                        objectFit: "contain",
                        marginLeft: "2px",
                      }}
                    />
                  </span>
                </button>
              </div>

              {submitted && (
                <p className="text-primary font-semibold text-center text-sm">
                  Thank you! We have received your message and will be in touch
                  shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
