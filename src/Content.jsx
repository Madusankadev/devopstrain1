import { useState } from "react";
export default function Content() {

    const [ingredientList, setIngredientList] = useState([]);

    const ingredientItelEl = ingredientList.map((item) => {
        return (<li>{item}</li>)
    })

    function addButton(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl)
        const ingredient = formData.get("newItem") 
        setIngredientList([...ingredientList, <li>{ingredient}</li>]) 
        formEl.reset()     
    }

    return (

        <main>
            {/* when we use form action a function it automatically pass the orm data to that function insted of event */}
            <form className="addBox" onSubmit={addButton}>
                <input type="text" name="newItem" />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientItelEl}
            </ul>
        </main>
    );
}