import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import axios from "axios";
function Cards() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCardData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res);
        setCardData(res?.data?.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(true);
      });
  };
  useEffect(() => {
    fetchCardData();
  }, []);
  return (
    <div className="cards">
      <h1>Check out these Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardData &&
              cardData.length > 0 &&
              cardData?.map((val) => {
                console.log(val.price);
                return (
                  <CardItem
                    imgsrc={val.images[0]}
                    name={val.title}
                    brand={val.brand}
                    price={val.pice || "$$$"}
                    description={val.description}
                    path={`/product/${val.id}`}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
