const ListItem = ({ item, clickItem, isShoppingCart }) => {
    if (isShoppingCart === "true") {
        return (
            <li
                key={item.id}
                className="list-item"
                value={item.title}
            >
                <span id="shopping-item">{item.title}</span><span id="shopping-amount">Amount: {item.amount}</span>
            </li>
        );
    } else {
        return (
            <li
                key={item.id}
                className="list-item"
                onClick={clickItem}
                value={item.title}
            >
                <span id="grocery-item">{item.title}</span>
            </li>
        )
    }
}

export default ListItem;