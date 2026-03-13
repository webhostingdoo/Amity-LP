import ContactHero from "@/components/sections/ContactHero";
import ContactContent from "@/components/sections/ContactContent";

export const metadata = {
  title: "Contact Us | Amity Palm Beach",
  description: "Get in touch with Amity Palm Beach. Call us, send a message, or find us at our West Palm Beach, FL location.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactContent />
    </main>
  );
}
