import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../../SharedComponents/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";

import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // categories
  const dessert = menu.filter((item) => item.category == "dessert");
  const soup = menu.filter((item) => item.category == "soup");
  const salad = menu.filter((item) => item.category == "salad");
  const pizza = menu.filter((item) => item.category == "pizza");
  const drinks = menu.filter((item) => item.category == "drinks");

  return (
    <div className="mb-10 md:mb-20">
      <Helmet>
        <title>Order Food | Bistro Boss</title>
      </Helmet>
      <Cover img={orderCover} title="Order food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <span>Salad</span>
          </Tab>
          <Tab>
            <span>Pizza</span>
          </Tab>
          <Tab>
            <span>Soup</span>
          </Tab>
          <Tab>
            <span>Dessert</span>
          </Tab>
          <Tab>
            <span>Drinks</span>
          </Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
