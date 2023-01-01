import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
    console.log(props)
  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.brand}>
            <img className="cards__item__img" src={props.imgsrc} alt="Travel" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.name}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
