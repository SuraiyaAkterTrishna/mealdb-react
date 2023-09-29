import { useLoaderData } from "react-router-dom";

const MealDetail = () => {
  const meals = useLoaderData();
  const { strMeal, strMealThumb, strInstructions } = meals.meals[0];
  return (
    <div className="card bg-base-100 shadow-xl my-8">
      <figure>
        <img
        className="w-full h-[70vh]"
          src={strMealThumb}
          alt="Fish"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {strMeal}
          <div className="badge badge-secondary">fish</div>
        </h2>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetail;
