import bed from "../../../../assets/img/bed.png";
import wrapped from "../../../../assets/img/wrapped.png";
import carpets from "../../../../assets/img/carpets.png";

import cls from "./FollowUsSection.module.css";

export function FollowUsSection() {
    return (
        <section className={cls.followUs}>
            <div className="container">
                <h2>Follow us on instagram</h2>
                <div className={cls.followUsWrapper}>
                    <div className={cls.blockWrapper}>
                        <img src={bed} alt="bed" />
                        <p id={cls.warm}>@warm.heart</p>
                        <p>
                            On our Instagram, we regularly share the most
                            interesting news. We also tell you about all our new
                            products.
                        </p>
                    </div>
                    <div className={cls.blockWrapper} id={cls.wrapped}>
                        <img src={wrapped} alt="wrapped" />
                        <p id={cls.text}>@warm.heart</p>
                    </div>
                    <div className={cls.blockWrapper} id={cls.carpets}>
                        <img src={carpets} alt="carpets" />
                        <p>@warm.heart</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export function FollowUsSection() {
//     return (
//         <section className={cls.followUs}>
//             <div className="container">
//                 <div className={cls.followUsContainer}>
//                     <h2>Follow us on instagram</h2>
//                     <div className={cls.followUsWrapper}>
//                         <div className={cls.bedBlock}>
//                             <img src={bed} alt="bed" />
//                             <p>
//                                 On our Instagram, we regularly share the most
//                                 interesting news. We also tell you about all our
//                                 new products.
//                             </p>
//                         </div>
//                         <div className={cls.wrappedBlock}>
//                             <img src={wrapped} alt="wrapped" />
//                         </div>
//                         <div className={cls.carpetsBlock}>
//                             <img src={carpets} alt="carpets" />
//                             <p>@warm.heart</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
