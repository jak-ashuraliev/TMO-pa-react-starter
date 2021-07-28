import './App.css';
import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function App() {

  const [ recipes, setRecipes ] = useState([]);
  const [ recipeName, setRecipeName ] = useState("");
  const [ recipeInstructions, setRecipeInst ] = useState("");

  const [ hideAddButton, setHideAddButton ] = useState(false);
  const [ showForm, setShowForm ] = useState(false);
  
  // HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Recipe Name") {
      setRecipeName(value);
    } else if (name === 'Recipe Instructions') {
      setRecipeInst(value);
    }
  }

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipes = { recipeName: recipeName, recipeInstructions: recipeInstructions };
    setRecipes((recipesList) => [...recipes, newRecipes])
    setRecipeName("");
    setRecipeInst("");

    setHideAddButton(false);
    setShowForm(false);
  }

  // Hide Button & Show Form
  const hideBtn = () => {
    setHideAddButton(true);
    setShowForm(true);
  }

  return (
    <div className="App">
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}

      <h1>My Recipes</h1>
      { recipes?.length >= 1 ? "" : <p>There are no recipes to list</p> }
      {recipes && recipes.map((recipe, index) => {
        return (
          <section role="list" key={index}>
            <div role="listitem">{recipe.recipeName}</div>
            <div role="listitem">{recipe.recipeInstructions}</div>
          </section>
        )
      })}

      { hideAddButton === false ? (
        <Button type="submit" 
        className="mt-2 mb-4"
        color="primary"
        onClick={() => hideBtn()}
        >Add Recipe</Button>
      ) : ("")}

      { showForm === true ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          
          <Label className="mt-2">Recipe Name
          <Input type="text" 
            name="Recipe Name" 
            value={recipeName} 
            onChange={(e) => handleChange(e)} 
            placeholder="Recipe Name"/>
          </Label>
          
          <Label className="mt-2">Recipe Instructions
          <Input type="text" 
            name="Recipe Instructions" 
            value={recipeInstructions} 
            onChange={(e) => handleChange(e)} 
            placeholder="Recipe Instructions"/>
          </Label>

        </FormGroup>
        
        <Button type="submit" 
          className="mt-2"
          color="success">Submit</Button>
      </Form>
      ) : ("")}

    </div>
  );
}

export default App;
