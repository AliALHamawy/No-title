// components/Background/BackgroundSVG.jsx
const BackgroundSVG = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <svg
                className="absolute w-full h-full opacity-50"
                viewBox="0 0 1440 969"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.1"
                    d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                    fill="url(#paint0_linear_95:1005)"
                />
                <path
                    opacity="0.1"
                    d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                    fill="url(#paint1_linear_95:1005)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_95:1005"
                        x1="1178.4"
                        y1="151.853"
                        x2="780.959"
                        y2="453.581"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_95:1005"
                        x1="160.5"
                        y1="220"
                        x2="1099.45"
                        y2="1192.04"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A6CF7" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default BackgroundSVG;