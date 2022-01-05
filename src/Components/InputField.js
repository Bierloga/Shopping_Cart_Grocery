const InputField = (props) => {
    return (
        <div>
            <input id="grocery-input" type="text"></input>
            <button onClick={() => {
                const grocery = document.getElementById("grocery-input").value
                props.addNewGrocery(grocery)
            }}>Submit</button>
        </div>
    );
}

export default InputField;