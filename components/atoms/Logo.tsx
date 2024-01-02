const Logo = () => {
    return (
        <svg
            width="78"
            height="38"
            viewBox="0 0 78 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 3C22.6731 3 37 17.3269 37 35H21C21 26.1634 13.8366 19 5 19V3Z"
                fill="url(#paint0_linear_40_5308)"
            />
            <circle
                cx="57"
                cy="19"
                r="16"
                fill="url(#paint1_angular_40_5308)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_40_5308"
                    x1="37"
                    y1="35"
                    x2="5"
                    y2="3"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                </linearGradient>
                <radialGradient
                    id="paint1_angular_40_5308"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(57 19) rotate(180) scale(16)"
                >
                    <stop stop-color="#D9D9D9" stop-opacity="0" />
                    <stop offset="1" stop-color="#D9D9D9" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default Logo;
