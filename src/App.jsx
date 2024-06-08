import './App.css'
import omletteDuFromage from './assets/image-omelette.jpeg'

function App() {

  return (
    <div className="container">
      <div className="recipe_page_card">

        <div className="recipe_page_img_container">
          <img src={omletteDuFromage} alt="Picture of a Simple Omlette" className="recipe_page_img" />
        </div>

        <div className="recipe_page_comp">
          <div className="recipe_page_title_desc">
            <h1 className="recipe_page_title young-serif-regular">Simple Omelette Recipe</h1>
            <p className="recipe_page_desc outfit-400">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </div>

          <div className="recipe_page_prep_time">
            <h3 className="recipe_page_prep_time_title outfit-600">Preparation time</h3>
            <ul className="recipe_page_prep_time_list">
              <li className="recipe_page_prep_time_list_item outfit-400"><span>Total</span>: Approximately 10 minutes</li>
              <li className="recipe_page_prep_time_list_item outfit-400"><span>Preparation</span>: 5 minutes</li>
              <li className="recipe_page_prep_time_list_item outfit-400"><span>Cooking</span>: 5 minutes</li>
            </ul>
          </div>

          <div className="recipe_page_ingredients">
            <h2 className="recipe_page_ingredients_title young-serif-regular">Ingredients</h2>
            <ul className="recipe_page_ingredients_list">
              <li className="recipe_page_ingredients_list_item outfit-400">2-3 large eggs</li>
              <li className="recipe_page_ingredients_list_item outfit-400">Salt, to taste</li>
              <li className="recipe_page_ingredients_list_item outfit-400">Pepper, to taste</li>
              <li className="recipe_page_ingredients_list_item outfit-400">1 tablespoon of butter or oil</li>
              <li className="recipe_page_ingredients_list_item outfit-400">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

          <hr />

          <div className="recipe_page_instructions">
            <h2 className="recipe_page_instructions_title young-serif-regular">Instructions</h2>
            <ol className="recipe_page_instructions_list">
              <li className="recipe_page_instructions_list_item outfit-400"><span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li className="recipe_page_instructions_list_item outfit-400"><span>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li className="recipe_page_instructions_list_item outfit-400"><span>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                the eggs evenly coat the surface.</li>
              <li className="recipe_page_instructions_list_item outfit-400"><span>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the
                middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li className="recipe_page_instructions_list_item outfit-400"><span>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li className="recipe_page_instructions_list_item outfit-400"><span>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>

          <hr />

          <div className="recipe_page_nutrition">
            <h2 className="recipe_page_nutrition_title young-serif-regular">Nutrition</h2>
            <p className="recipe_page_nutrition_info outfit-400">The table below shows nutritional values per serving without the additional fillings.</p>
            <div className="recipe_page_nutrition_breakdown">
              <div className="recipe_page_nutrition_breakdown_item">
                <p className="recipe_page_nutrition_nutrient outfit-400">Calories</p>
                <p className="recipe_page_nutrition_nutrient_amount outfit-700">277kcal</p>
              </div>

              <hr />

              <div className="recipe_page_nutrition_breakdown_item">
                <p className="recipe_page_nutrition_nutrient outfit-400">Carbs</p>
                <p className="recipe_page_nutrition_nutrient_amount outfit-700">0g</p>
              </div>

              <hr />

              <div className="recipe_page_nutrition_breakdown_item">
                <p className="recipe_page_nutrition_nutrient outfit-400">Protein</p>
                <p className="recipe_page_nutrition_nutrient_amount outfit-700">20g</p>
              </div>

              <hr />

              <div className="recipe_page_nutrition_breakdown_item">
                <p className="recipe_page_nutrition_nutrient outfit-400">Fat</p>
                <p className="recipe_page_nutrition_nutrient_amount outfit-700">22g</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
