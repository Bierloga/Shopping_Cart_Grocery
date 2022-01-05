import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
    return (
        <span className="shopping-cart">
            <h1>Shopping Cart</h1>
            <List itemList={props.itemList} isShoppingCart="true"/>
            <button onClick={() => props.emptyCart()}>Empty Cart!</button>
        </span>
    );
}

export default ShoppingCart;

