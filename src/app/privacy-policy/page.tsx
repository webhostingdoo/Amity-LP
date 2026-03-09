import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata = {
  title: "Privacy Policy & HIPAA Notice | Tru Dallas Detox",
  description: "Privacy Policy and HIPAA Notice of Privacy Practices for Tru Dallas Detox & Recovery Center.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}
