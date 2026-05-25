import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/77b20753-f9fa-4b90-bbc8-a2e47271c3bc/files/ad650155-2bf8-44a5-bbd0-e3d1bb456bcc.jpg"
          alt="Уральские горы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Легенды советского мотопрома</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          УРАЛ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          История, характер и железный дух четырёх великих мотоциклов — Иж, Урал, Днепр и Ява
        </p>
        <a
          href="#bikes"
          className="inline-block mt-10 px-8 py-3 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Смотреть мотоциклы
        </a>
      </div>
    </div>
  );
}
