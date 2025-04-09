
const Card = () => {
  const cardData = [
    {
      img: "https://placehold.co/600x400",
      id: 1,
      title: "QODE Badges for WooCommerce",
      content: "Bu birinci kartın içeriği",
      bgColor: "bg-gray-300",
      nboText: ["NBO text 1"],
      price: 6953,  
      exampleText: "example1",
    },
    {
      img: "https://placehold.co/600x400",
      id: 2,
      price: 63,
      title: "Başlık 2",
      nboText: ["NBO text 2"],
      content: "Bu ikinci kartın içeriği",
      bgColor: "bg-blue-300",
    },
    {
      img: "https://placehold.co/600x400",
      id: 3,
      price: 59,
      title: "Başlık 3",
      nboText: ["NBO text 3"],
      content: "Bu ikinci kartın içeriği",
      bgColor: "bg-red-100",
    },
    {
      img: "https://placehold.co/600x400",
      id: 4,
      title: "Başlık 4",
      price: 619,
      nboText: ["NBO text 4"],
      content: "Bu ikinci kartın içeriği",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="relative container mx-auto px-7 py-10 md:py-14 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-md p-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 rounded-2xl object-cover"
              />
              <h1 className="text-lg font-semibold">{card.title}</h1>
            </div>
            <p className="mb-4 text-gray-700">{card.nboText}</p>
            <div className="flex flex-col">
              <ul className="space-y-2">
                {card.nboText?.map((nboText, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {nboText}
                  </li>
                ))}
              </ul>
            </div>
            {card && (
              <div className="flex justify-between items-center">
                <span className=" text-black mt-12 text-sm font-semibold items-center">
                  Who Made it?
                </span>
                <p className="mt-12">
                  <span className="text-sm font-semibold items-center">from</span> ${card.price}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
