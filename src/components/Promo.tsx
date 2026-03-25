import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Рекомендации коллегам
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl leading-tight mb-8">
          Будьте терпеливы, замечайте прогресс каждого ребёнка и создавайте атмосферу безопасности — это основа настоящего обучения.
        </p>
        <div className="flex flex-wrap gap-4">
          {["Хвалите за усилия, не за результат", "Говорите на языке ребёнка", "Движение = лучшее усвоение", "Каждый ребёнок талантлив"].map((tip) => (
            <span key={tip} className="border border-white text-white text-xs sm:text-sm px-4 py-2 uppercase tracking-wide">
              {tip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}