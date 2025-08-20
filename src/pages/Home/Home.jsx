import { ComfortSection } from "./sections/ComfortSection/ComfortSection";
import { DiscountSection } from "./sections/DiscountSection/DiscountSection";
import { EcoSection } from "./sections/EcoSection/EcoSection";
import { FollowUsSection } from "./sections/FollowUsSection/FollowUsSection";

export function Home() {
    return (
        <>
            <ComfortSection />
            <EcoSection />
            <FollowUsSection />
            <DiscountSection />
        </>
    );
}
