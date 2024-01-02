import TanstackProvider from "@/components/TanstackProvider";
import CTA from "@/components/sections/CTA";
import ContradictA from "@/components/sections/ContradictA";
import ContradictB from "@/components/sections/ContradictB";
import Hero from "@/components/sections/Hero";

export default function Home() {
    return (
        <main className="px-4 sm:px-32 md:px-64">
            <Hero />
            <ContradictA />
            <ContradictB />
            <TanstackProvider>
                <CTA />
            </TanstackProvider>
        </main>
    );
}
