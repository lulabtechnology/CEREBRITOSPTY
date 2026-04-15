"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";

type LogoProps = {
  compact?: boolean;
  white?: boolean;
  className?: string;
};

export default function Logo({ compact = false, white = false, className = "" }: LogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!failed ? (
        <img
          src={site.logo}
          alt="Logo Cerebritos"
          onError={() => setFailed(true)}
          className={compact ? "h-12 w-auto object-contain" : "h-16 w-auto object-contain"}
        />
      ) : (
        <div className={`rounded-full px-5 py-3 text-xl font-black shadow-soft ${white ? "bg-white text-fucsia" : "bg-white text-fucsia"}`}>
          Cerebritos
        </div>
      )}
    </div>
  );
}
