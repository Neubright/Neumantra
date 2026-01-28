export default function OurStory() {
  return (
    <section
      className="relative text-white py-32 md:py-48 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1200&q=40')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a1a2e",
      }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/85"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Our Story
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
          Forged from two decades of excellence in financial advisory and stakeholder engagement
        </p>
      </div>
    </section>
  );
}
