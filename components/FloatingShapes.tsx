export default function FloatingShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[4%] top-[12%] h-16 w-16 animate-floaty rounded-blob bg-sol/70 blur-[1px]" />
      <div className="absolute right-[6%] top-[18%] h-20 w-20 animate-floaty rounded-full bg-fucsia/25 [animation-delay:1s]" />
      <div className="absolute bottom-[14%] left-[8%] h-24 w-24 animate-floaty rounded-[35%] bg-limon/45 [animation-delay:2s]" />
      <div className="absolute bottom-[20%] right-[14%] h-14 w-14 animate-wiggle rounded-xl bg-lila/70" />
      <span className="absolute left-[18%] top-[26%] animate-floaty text-3xl [animation-delay:0.5s]">⭐</span>

      <img
        src="/images/custom/sticker-rainbow.png"
        alt=""
        className="absolute right-[12%] top-[12%] h-16 w-auto animate-floaty object-contain [animation-delay:1.3s]"
      />

      <img
        src="/images/custom/sticker-pencil.png"
        alt=""
        className="absolute bottom-[8%] right-[5%] h-20 w-auto animate-floaty object-contain [animation-delay:2.2s]"
      />

      <span className="absolute bottom-[35%] left-[3%] animate-wiggle text-3xl">🧩</span>
    </div>
  );
}
