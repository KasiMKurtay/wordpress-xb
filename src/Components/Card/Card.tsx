const Card = () => {
  const cardData = [
    {
      img: "https://placehold.co/600x400",
      id: 1,
      title: "Başlık 1",
      content: "Bu birinci kartın içeriği",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="container mx-auto px-7 py-10 md:py-14 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div key={card.id} className={`${card.bgColor} `}>
            <img
              src={card.img}
              style={{
                width: "100px",
                height: "50px",
                marginTop: "12px",
                marginBottom:"",
                borderRadius: "24px",
              }}
            />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
