import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata = {
  title: "Privacy Policy & HIPAA Notice | Amity Palm Beach",
  description: "Privacy Policy and HIPAA Notice of Privacy Practices for Amity Palm Beach.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}
