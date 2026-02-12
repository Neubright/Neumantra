import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import SectionDivider from "../ui/SectionDivider";

export default function ContactForm() {
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
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Form
          </h2>
          <SectionDivider />
        </div>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-apple transition-all duration-300 hover:bg-white/40 hover:border-white/100 max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-primary mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
            />
          </div>

          <div className="mb-6">
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
                  <span className="text-gray-700 text-base capitalize">
                    {method === "either" ? "Either" : method}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-primary mb-3">
              Nature of Inquiry
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
            >
              <option value="">Select an inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-primary mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent bg-white/80"
              placeholder="Tell us about your capital markets objectives..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-accent hover:bg-red-700 text-white pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-apple inline-flex items-center gap-3"
            >
              Submit
              <span className="flex-shrink-0 backdrop-blur-md bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center">
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
            <p className="text-accent font-semibold text-center mt-4">
              Thank you! We have received your message and will be in touch
              shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
