import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ScheduleConsultation from "@/components/contact/ScheduleConsultation";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import { usePageLoadScroll } from "@/hooks/usePageLoadScroll";

export default function ContactUs() {
  usePageLoadScroll();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <ScheduleConsultation />
        <ContactForm />
        <ContactDetails />
      </main>
      <Footer />
    </div>
  );
}
