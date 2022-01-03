import React from "react"
import ListItem from "./ListItem";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { title: "Bread", id: 1 },
                { title: "Milk", id: 2 },
                { title: "Eggs", id: 3 },
                { title: "Coffee", id: 4 }
            ]

        }
    }
    onItemClick(item) {
        console.log(`Clicked ${item.id} ${item.title}`)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.groceryItems.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            clickItem={() => { this.onItemClick(item) }}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;