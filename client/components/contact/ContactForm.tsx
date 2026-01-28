import { useInView } from "@/hooks/useInView";
import { useState } from "react";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      className={`py-16 md:py-24 bg-gray-50 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-gray-200">
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
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
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
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
                  <span className="text-gray-700 capitalize">{method === "either" ? "Either" : method}</span>
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
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
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
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              placeholder="Tell us about your capital markets objectives..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-accent font-semibold text-center mt-4">
              Thank you! We have received your message and will be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
