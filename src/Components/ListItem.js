const ListItem = ({ item, clickItem, isShoppingCart }) => {
    if (isShoppingCart === "true") {
        return (
            <li
                key={item.id}
                className="list-item"
                onClick={clickItem}
                value={item.title}
            >
                <span>{item.title}</span><span>Amount: {item.amount}</span>
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
                <span>{item.title}</span>
            </li>
        )
    }
}

export default ListItem;