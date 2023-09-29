import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Restaurant.css';


const Restaurant = () => {
    const {meals} = useLoaderData();
    return (
        <div>
            All meals here : {meals.length}
            <div className="meals-container my-12">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal = {meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;