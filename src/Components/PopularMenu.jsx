import { useEffect, useState } from "react";
import SectionTitle from "../SharedComponents/SectionTitle";
import MenuItem from "../SharedComponents/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category == "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>

      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button className="px-4 py-2 border-b-4 rounded-lg mt-4  uppercase font-bold hover:cursor-pointer block mx-auto my-4 ">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
