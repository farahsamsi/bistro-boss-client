import { Helmet } from "react-helmet-async";
import Cover from "../../SharedComponents/Cover";
import menuBg from "../../assets/menu/banner3.jpg";

import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../SharedComponents/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const soup = menu.filter((item) => item.category == "soup");
  const salad = menu.filter((item) => item.category == "salad");
  const pizza = menu.filter((item) => item.category == "pizza");
  const offered = menu.filter((item) => item.category == "offered");
  return (
    <div className="mb-20">
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>

      <Cover img={menuBg} title="Our Menu"></Cover>

      {/* todays offer */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* Desserts */}
      <MenuCategory
        items={dessert}
        title="dessert"
        img={dessertBg}
      ></MenuCategory>

      {/* Pizza */}
      <MenuCategory items={pizza} title="pizza" img={pizzaBg}></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={salad} title="salad" img={saladBg}></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={soup} title="soup" img={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
