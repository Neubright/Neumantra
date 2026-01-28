export default function ContactHero() {
  return (
    <section
      className="relative text-white py-32 md:py-48 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5989928/pexels-photo-5989928.jpeg?auto=compress&cs=tinysrgb&w=1200&q=40')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a1a2e",
      }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/85"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Let's Discuss Your Capital Markets Journey
        </p>
      </div>
    </section>
  );
}
