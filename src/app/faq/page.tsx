import FaqHero from "@/components/sections/FaqHero";
import FaqContent from "@/components/sections/FaqContent";
import FaqCta from "@/components/sections/FaqCta";

export const metadata = {
  title: "FAQ | Amity Palm Beach",
  description: "Answers to the most common questions about detox, insurance coverage, and what to expect at Amity Palm Beach.",
};

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqContent />
      <FaqCta />
    </main>
  );
}
