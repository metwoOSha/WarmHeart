import { ComfortSection } from "./sections/ComfortSection/ComfortSection";
import { DiscountSection } from "./sections/DiscountSection/DiscountSection";
import { EcoSection } from "./sections/EcoSection/EcoSection";
import { FollowUsSection } from "./sections/FollowUsSection/FollowUsSection";
import { PopularSection } from "./sections/PopularSection/PopularSection";
import { SoftSection } from "./sections/SoftSection/SoftSection";

export function Home() {
    return (
        <>
            <SoftSection />
            <PopularSection />
            <ComfortSection />
            <EcoSection />
            <FollowUsSection />
            <DiscountSection />
        </>
    );
}
