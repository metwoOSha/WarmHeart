import { ComfortSection } from "./sections/ComfortSection/ComfortSection";
import { EcoSection } from "./sections/EcoSection/EcoSection";
import { FollowUsSection } from "./sections/FollowUsSection/FollowUsSection";

export function Home() {
    return (
        <main>
            <ComfortSection />
            <EcoSection />
            <FollowUsSection />
        </main>
    );
}
