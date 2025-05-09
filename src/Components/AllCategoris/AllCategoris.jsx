import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const AllCategoris = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1>All Categories {categories.length}</h1>
      <div className="grid text-center">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`} // Adjusted to look like a valid route
            className="bg-base-100 hover:bg-base-200 font-semibold p-2 rounded mt-4"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCategoris;
