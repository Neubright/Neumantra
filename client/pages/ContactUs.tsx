import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ScheduleConsultation from "@/components/contact/ScheduleConsultation";
import ContactFormAndDetails from "@/components/contact/ContactFormAndDetails";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function ContactUs() {
  usePageLoadScroll();
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <ScheduleConsultation />
        <ContactFormAndDetails />
      </main>
      <Footer />
    </div>
  );
}
