"use client";
import React, { forwardRef, SVGProps } from "react";

const Logo = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (props, ref) => {
        return (
            <svg
                width="370"
                height="400"
                viewBox="0 0 433 403"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_i_9_28)">
                    <path
                        d="M60 280.015V373C60 389.569 46.5685 403 30 403C13.4315 403 0 389.569 0 373V46.3858C0 46.0227 0 45.8412 0.00102513 45.6877C0.169023 20.5256 20.5256 0.169023 45.6877 0.00102513C45.8412 0 46.0227 0 46.3857 0C46.6071 0 46.7177 0 46.8211 0.000465013C63.2821 0.0744858 78.4486 8.93987 86.5899 23.2469C86.6404 23.3355 86.6939 23.4305 86.7994 23.618L86.804 23.626L154.512 143.865C175.925 181.892 186.631 200.905 200.918 207.045C212.329 211.949 225.239 212.03 236.71 207.268C251.073 201.307 262.016 182.429 283.901 144.673L355.894 20.4745C363.24 7.80144 376.78 0 391.428 0C414.111 0 432.5 18.3885 432.5 41.072V305.661C432.5 323.538 418.008 338.03 400.131 338.03C382.254 338.03 367.762 323.538 367.762 305.661V283.396C367.762 258.113 367.762 245.472 366.379 239.96C357.602 204.983 313.82 193.252 288.73 219.154C284.776 223.236 278.456 234.184 265.814 256.079C259.314 267.338 256.064 272.968 253.07 276.379C234.751 297.254 202.249 297.254 183.93 276.379C180.936 272.968 177.686 267.339 171.186 256.08L171.186 256.079L168.258 251.008L168.257 251.007C150.656 220.52 141.855 205.277 135.805 200.128C111.285 179.261 73.4659 189.394 62.6652 219.725C60 227.21 60 244.812 60 280.015Z"
                        fill="url(#paint0_linear_9_28)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_i_9_28"
                        x="0"
                        y="0"
                        width="432.5"
                        height="412.199"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="9.19895" />
                        <feGaussianBlur stdDeviation="6.89921" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_9_28"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_9_28"
                        x1="320.771"
                        y1="372.775"
                        x2="59.2972"
                        y2="38.8802"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#A8A8A6" />
                        <stop offset="0.451645" stopColor="#696969" />
                        <stop offset="0.665" stopColor="#F9F8F6" />
                        <stop offset="0.825" stopColor="#D4D4D4" />
                        <stop offset="1" stopColor="#7F7F7F" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }
);
Logo.displayName = "Logo";
export default Logo;
