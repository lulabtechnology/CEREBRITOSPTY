import { Sparkles } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, centered = true }: Props) {
  return (
    <div className={`mb-12 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full bg-fucsia/10 px-4 py-2 text-sm font-black text-fucsia ${centered ? "justify-center" : ""}`}>
          <Sparkles size={16} /> {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-black tracking-[-0.04em] text-tinta sm:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-suave sm:text-xl">{text}</p>}
    </div>
  );
}
