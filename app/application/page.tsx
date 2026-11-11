import { ApplicationIntro } from "@/components/application/application-intro";
import { MaterialsSection } from "@/components/application/materials-section";
import { ValuesSection } from "@/components/application/values-section";

export default function ApplicationPage() {
  return (
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] pb-[95px] font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <ApplicationIntro />
        <ValuesSection />
        <MaterialsSection />
      </div>
    </main>
  );
}
