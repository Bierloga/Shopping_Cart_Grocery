import React from "react";
import List from "./List";
import InputField from "./InputField";

const GroceryList = (props) => {
    return (
        <span className="grocery-list">
            <h1>GroceryList</h1>
            <List itemList={props.itemList} isShoppingCart="false" handleClickGroceryItem={props.handleClickGroceryItem} />
            <InputField addNewGrocery={props.addNewGrocery} />
        </span>
    );
}

export default GroceryList;

