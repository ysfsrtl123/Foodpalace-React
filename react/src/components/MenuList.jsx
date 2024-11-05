import Menu from "./Menu";

function MenuList() {
  const menu = [
    {
      title: "Adana Şiş Kebap",
      description: "Adana usulü şiş kebap meze ile",
      image: "/img/kebab.jpg",
    },
    
    {
      title: "Çıtır Tavuk",
      description: "1 porsiyon Çıtır Tavuk",
      image: "/img/brost.jpg",
    },

    {
      title:'Karışık Pizza',
      description:'Karışık enfes pizza',
      image:'/img/pizza.png'
    }
  ];

  return (
    <>
      <div className="container-fluid mx-auto d-flex flex-wrap justify-content-center">
        {menu.map((m, index) => (
          <Menu key={index} menu={m} />  
        ))}
      </div>
    </>
  );
}

export default MenuList;
