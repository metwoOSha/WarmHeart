import cls from "./EcoSection.module.css";

export function EcoSection() {
    return (
        <section className={cls.eco}>
            <div className="container">
                <div className={cls.ecoWrapper}>
                    <h2>We use eco-friendly materials</h2>
                    <p>
                        We always care about the environment. Therefore we use
                        only environmentally friendly and recyclable materials
                        in our production. Our blankets help to warm up on cold
                        evenings, and also make your home even more cozy.
                    </p>
                </div>
                <span>
                    <svg
                        width="150"
                        height="150"
                        viewBox="0 0 150 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="75"
                            cy="75"
                            r="73.5"
                            fill="#FDFBF9"
                            stroke="#2C2C2C"
                            stroke-width="3"
                        />
                        <path
                            d="M31.2095 123C35.6857 121.729 42.6326 118.748 50.6184 113.684M90.7902 72.3084C78.6035 92.3481 63.3009 105.643 50.6184 113.684M50.6184 113.684C77.5501 120.528 128.615 115.464 117.421 40.4579C92.6725 41.8942 76.3829 49.6537 65.5139 59.5089M42.9451 103.71C43.5757 100.812 44.3715 97.1058 45.5849 92.9439M51.3805 78.1402C51.5778 73.8037 51.0697 61.6318 47.4588 47.6355M51.3805 78.1402C48.732 83.3135 46.9096 88.4004 45.5849 92.9439M51.3805 78.1402C54.6382 71.7771 59.1456 65.2833 65.5139 59.5089M45.5849 92.9439C34.5788 83.2243 19.1702 56.428 45.5849 27C61.8892 34.1776 65.6643 51.6633 65.5139 59.5089"
                            stroke="#2C2C2C"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </section>
    );
}
