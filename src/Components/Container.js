import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { title: "Bread", id: 1 },
                { title: "Milk", id: 2 },
                { title: "Eggs", id: 3 },
                { title: "Coffee", id: 4 },
                { title: "Beer", id: 5 }
            ],
            shoppingListItems: [
                { title: "Beer", id: 5, amount: 2 }
            ]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addNewGrocery = this.addNewGrocery.bind(this)
        this.createID = this.createID.bind(this)
        this.addAmountToItem = this.addAmountToItem.bind(this)
    }

    addAmountToItem(item) {
        this.setState(prevState => {
            const newList = [...prevState.shoppingListItems];
            const newestList = newList.map((ob) => {
                if (item.id === ob.id) {
                    return { title: ob.title, id: ob.id, amount: (ob.amount + 1) }
                } else { return ob }
            });
            const newState = { ...prevState, shoppingListItems: newestList }
            return newState
        })
    }

    handleClickGroceryItem(item) {
        const newArray = this.state.shoppingListItems.map((item) => item.id)
        if (newArray.includes(item.id) === false) {
            const newItem = item
            newItem.amount = 1
            this.setState(prevState => {
                const newList = [...prevState.shoppingListItems]
                newList.push(newItem)
                const newState = { ...prevState, shoppingListItems: newList }
                return newState
            })
        } else {
            this.addAmountToItem(item)
        }
    }

    emptyCart() {
        this.setState(prevState => {
            return prevState.shoppingListItems = []
        })
    }

    createID() {
        if (this.state.groceryItems.length > 0) {
            const idArray = this.state.groceryItems.map((item) => { return item.id })
            const newArray = idArray.sort(function (a, b) {
                return a - b
            })
            const highNumber = newArray.splice(-1)
            return parseInt(highNumber) + 1
        } else { return 1 }
    }

    addNewGrocery(value) {
        const idValue = this.createID()
        this.setState(prevState => {
            const newItem = { title: value, id: idValue }
            const newList = [...prevState.groceryItems]
            newList.push(newItem)
            const newState = { ...prevState, groceryItems: newList }
            return newState
        })

    }
    render() {
        return (
            <div className="container">
                <GroceryList
                    itemList={this.state.groceryItems}
                    handleClickGroceryItem={this.handleClickGroceryItem}
                    addNewGrocery={this.addNewGrocery} />
                <ShoppingCart itemList={this.state.shoppingListItems} emptyCart={this.emptyCart} />
            </div>
        );
    }
}

export default Container;