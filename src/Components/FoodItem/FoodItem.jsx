import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeCart ,url} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/images/"+image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add item"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeCart(id)}
              alt="Remove item"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt="Add item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
