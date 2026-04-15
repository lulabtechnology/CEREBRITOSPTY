import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cielo: "#A3EDF8",
        sol: "#FBD15F",
        fucsia: "#F64EB8",
        lila: "#E0BDFF",
        limon: "#BDE22A",
        tinta: "#263238",
        suave: "#667085"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(38, 50, 56, 0.12)",
        glow: "0 18px 45px rgba(246, 78, 184, 0.25)"
      },
      borderRadius: {
        blob: "42% 58% 55% 45% / 55% 40% 60% 45%"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
