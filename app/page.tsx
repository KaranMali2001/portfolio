import CommandPalette from "@/components/portfolio/CommandPalette";
import DevHero from "@/components/portfolio/dev/DevHero";
import DevNav from "@/components/portfolio/dev/DevNav";
import { DevContact, DevEngineeringAI, DevExperience, DevLearn, DevProjects, DevWriting } from "@/components/portfolio/dev/DevSections";
import { ScrollProgress } from "@/components/portfolio/dev/ScrollProgress";
import { personalInfo } from "@/lib/portfolio-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@id": "#karan-mali",
    "@type": "Person",
    name: personalInfo.name,
    alternateName: personalInfo.githubUsername,
    description: "Backend & Product Engineer working on data integrity, multi-tenant architecture, and AI tooling. Currently at Ajar. Open to backend & product roles.",
    image: {
      "@type": "ImageObject",
      url: `${personalInfo.website}/avatar.jpg`,
    },
    url: personalInfo.website,
    sameAs: [personalInfo.github, personalInfo.devto, personalInfo.medium, personalInfo.x],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#F5EFE6] text-zinc-900">
        <ScrollProgress />
        <div className="mx-auto max-w-[720px] px-5">
          <DevNav />
          <DevHero />
          <DevEngineeringAI />
          <DevExperience />
          <DevProjects />
          <DevWriting />
          <DevLearn />
          <DevContact />
        </div>
      </main>
      <CommandPalette />
    </>
  );
}
