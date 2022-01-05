import React from "react"
import ListItem from "./ListItem";

const List = (props) => {
    return (
        <div>
            <ul>
                {props.itemList.map((item) => (
                    <ListItem
                        key={item.id}
                        isShoppingCart={props.isShoppingCart}
                        item={item}
                        clickItem={() => { props.handleClickGroceryItem(item) }}
                    />
                ))}
            </ul>
        </div>)
}

export default List;

