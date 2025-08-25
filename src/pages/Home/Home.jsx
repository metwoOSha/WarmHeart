import { ComfortSection } from "./sections/ComfortSection/ComfortSection";
import { DiscountSection } from "./sections/DiscountSection/DiscountSection";
import { EcoSection } from "./sections/EcoSection/EcoSection";
import { FollowUsSection } from "./sections/FollowUsSection/FollowUsSection";
import { PopularSection } from "./sections/PopularSection/PopularSection";

export function Home() {
    return (
        <>
            <PopularSection />
            <ComfortSection />
            <EcoSection />
            <FollowUsSection />
            <DiscountSection />
        </>
    );
}
