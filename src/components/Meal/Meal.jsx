import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const {idMeal, strMealThumb, strMeal} = meal;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={strMealThumb}
          alt="fish"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <p>{meal.strInstructions.slice(0, 140)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to={`/meal/${idMeal}`}>Show details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
