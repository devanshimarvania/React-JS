import React from "react";

function ListExample() {
    const fruitList = ["Mango", "Pineapple", "Strawberry", "Blueberry", "Papaya", "Kiwi", "Apple", "Grapes"];

    return (
        <>
            <h2>List Examples :</h2>
            <ol>
                {fruitList.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ol>
        </>
    );
}

export default ListExample;