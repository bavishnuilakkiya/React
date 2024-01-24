export function Product() {
  const data = [
    {
      id: 1,
      title: "Onion",
      category: "veg"
    },
    {
      id: 2,
      title: "Tomato",
      category: "veg"
    },
    {
      id: 3,
      title: "Orange",
      category: "fruit"
    },
    {
      id: 4,
      title: "Apple",
      category: "fruit"
    }
    // {
    //   id: 5,
    //   title: "Banana",
    //   category: "fruit"
    // },
  ];

  return (
    <div>
      {data.map( (item) => {
          return (
            <h3>{item.title} - {item.category} </h3>

            )
      })}
    </div>
  );

}
