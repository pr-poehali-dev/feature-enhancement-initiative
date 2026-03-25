export default function Featured() {
  const facts = [
    {
      grade: "1 класс",
      age: "6–7 лет",
      fact: "Дети переживают огромный стресс адаптации. Им важна похвала за каждый маленький успех — это формирует уверенность на годы вперёд.",
    },
    {
      grade: "2 класс",
      age: "7–8 лет",
      fact: "Активно развивается логическое мышление. Дети начинают задавать вопрос «почему?» — это лучший момент для развития любознательности.",
    },
    {
      grade: "3 класс",
      age: "8–9 лет",
      fact: "Формируются дружеские связи и командный дух. Групповые задания и совместные проекты дают мощный толчок социальному развитию.",
    },
    {
      grade: "4 класс",
      age: "9–10 лет",
      fact: "Дети готовятся к переходу в среднее звено. Самостоятельность и ответственность — ключевые навыки, которые нужно закрепить именно сейчас.",
    },
  ];

  return (
    <div id="about" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
          <div className="flex-1">
            <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Факты о детях</h3>
            <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight">
              Каждый возраст — своя вселенная. Понимая ребёнка, учитель открывает путь к знаниям.
            </p>
          </div>
          <div className="w-full lg:w-72 h-80 lg:h-96 shrink-0 overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/3990785c-02d8-4d0e-a663-62165f0a0c6c/bucket/defd67f9-6f3b-4f40-88db-4d13b852d06c.jpg"
              alt="Вадим Широков"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((item) => (
            <div key={item.grade} className="border border-neutral-200 p-8 hover:border-neutral-900 transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-neutral-900">{item.grade}</h4>
                <span className="text-sm text-neutral-400 uppercase tracking-wide">{item.age}</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">{item.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}