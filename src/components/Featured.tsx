const bikes = [
  {
    id: "izh",
    name: "Иж Планета 5",
    year: "1987–1994",
    tag: "Народный мотоцикл СССР",
    description:
      "Иж Планета 5 — вершина ижевской классики. Надёжный одноцилиндровый двигатель 350 куб. см, плавный ход и узнаваемый силуэт сделали его самым массовым мотоциклом Советского Союза. Миллионы семей объехали на нём полстраны.",
    image:
      "https://cdn.poehali.dev/projects/77b20753-f9fa-4b90-bbc8-a2e47271c3bc/files/5ea3195e-97ab-46f3-a962-053f66dcdd92.jpg",
    specs: [
      { label: "Двигатель", value: "350 куб. см" },
      { label: "Мощность", value: "18 л.с." },
      { label: "Скорость", value: "до 130 км/ч" },
    ],
    reverse: false,
  },
  {
    id: "ural",
    name: "Урал",
    year: "1941 — наши дни",
    tag: "Легенда с коляской",
    description:
      "Рождённый для фронтовых дорог Великой Отечественной, Урал стал символом надёжности и мужества. Оппозитный двигатель, привод на коляску и неубиваемая конструкция позволяют покорять бездорожье там, где другие сдаются.",
    image:
      "https://cdn.poehali.dev/projects/77b20753-f9fa-4b90-bbc8-a2e47271c3bc/files/304c2f0b-4c54-4e68-a290-9f7dc190346c.jpg",
    specs: [
      { label: "Двигатель", value: "750 куб. см" },
      { label: "Мощность", value: "40 л.с." },
      { label: "Тип", value: "Оппозит" },
    ],
    reverse: true,
  },
  {
    id: "dnepr",
    name: "Днепр",
    year: "1967–2002",
    tag: "Тяжёлый богатырь",
    description:
      "Киевский завод создал тяжёлый мотоцикл для тех, кто любит дорогу серьёзно. Мощный оппозитный двигатель, крепкая рама и привод на колесо коляски — Днепр брал там, где другие застревали.",
    image:
      "https://cdn.poehali.dev/projects/77b20753-f9fa-4b90-bbc8-a2e47271c3bc/files/9b5c3fcd-da94-4550-bc88-463bdcb14529.jpg",
    specs: [
      { label: "Двигатель", value: "650 куб. см" },
      { label: "Мощность", value: "32 л.с." },
      { label: "Тип", value: "Оппозит" },
    ],
    reverse: false,
  },
  {
    id: "jawa",
    name: "Ява",
    year: "1929 — наши дни",
    tag: "Чешский аристократ",
    description:
      "Jawa из Чехословакии — мечта советского мотоциклиста. Изящный дизайн, плавный двигатель и европейское качество выделяли её на фоне отечественных машин. Иметь «Яву» означало особый статус.",
    image:
      "https://cdn.poehali.dev/projects/77b20753-f9fa-4b90-bbc8-a2e47271c3bc/files/f4d4d492-df58-4f76-8fe3-b08419706e85.jpg",
    specs: [
      { label: "Двигатель", value: "350 куб. см" },
      { label: "Мощность", value: "19 л.с." },
      { label: "Скорость", value: "до 135 км/ч" },
    ],
    reverse: true,
  },
];

export default function Featured() {
  return (
    <div id="bikes" className="bg-white">
      {bikes.map((bike) => (
        <div
          key={bike.id}
          className={`flex flex-col ${bike.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 border-b border-neutral-100`}
        >
          <div className="flex-1 h-[350px] lg:h-[800px] mb-8 lg:mb-0">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex-1 text-left lg:h-[800px] flex flex-col justify-center ${bike.reverse ? "lg:mr-16" : "lg:ml-16"}`}
          >
            <p className="uppercase mb-3 text-xs tracking-[0.2em] text-neutral-500">{bike.tag}</p>
            <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-neutral-900 leading-tight">
              {bike.name}
            </h2>
            <p className="text-sm text-neutral-400 mb-6 uppercase tracking-widest">{bike.year}</p>
            <p className="text-lg lg:text-xl mb-8 text-neutral-600 leading-relaxed max-w-lg">
              {bike.description}
            </p>
            <div className="flex gap-8 mb-8">
              {bike.specs.map((spec) => (
                <div key={spec.label}>
                  <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">{spec.label}</p>
                  <p className="text-base font-semibold text-neutral-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
