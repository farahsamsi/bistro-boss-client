import { useEffect, useState } from "react";
import SectionTitle from "../SharedComponents/SectionTitle";
import FoodCard from "../SharedComponents/FoodCard";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.slice(0, 3);
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef recommends"
      ></SectionTitle>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menu.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
