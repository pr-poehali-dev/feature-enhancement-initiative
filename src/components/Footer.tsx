export default function Footer() {
  const reviews = [
    { name: "Мария Петрова", text: "Вадим очень внимательный и терпеливый. Мой сын с удовольствием ходит на занятия!" },
    { name: "Александр Козлов", text: "Умеет найти подход к каждому ребёнку. Отличный педагог-практикант." },
    { name: "Светлана Иванова", text: "Дочь стала намного увереннее в себе. Спасибо за индивидуальный подход!" },
  ];

  return (
    <div
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 h-full w-full flex flex-col justify-between">

            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-2" id="contact">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Связаться</h3>
                <a
                  href="mailto:vadim.shirokov@edu.ru"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  vadim.shirokov@edu.ru
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О себе
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Увлечения</h3>
                <span className="text-white text-sm sm:text-base">Лыжный спорт</span>
                <span className="text-white text-sm sm:text-base">Мотокросс</span>
                <span className="text-white text-sm sm:text-base">Педагогика</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="uppercase text-neutral-400 text-xs sm:text-sm">Отзывы</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {reviews.map((r) => (
                  <div key={r.name} className="border border-neutral-700 p-4">
                    <p className="text-neutral-300 text-sm leading-relaxed mb-2">"{r.text}"</p>
                    <p className="text-neutral-500 text-xs uppercase tracking-wide">{r.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] text-white font-bold tracking-tight">
                ШИРОКОВ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} · Сретенск</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
