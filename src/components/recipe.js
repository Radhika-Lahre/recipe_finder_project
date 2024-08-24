import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './style.css';
import oats from '../images/oats.png';
import chilla from '../images/chilla.png';
import poha1 from '../images/poha1.png';
import sandwich from '../images/sandwich.png';

function Breakfast() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500); // Delay to trigger animations
    }, []);

    const recipes = [
        {
            title: "Oats",
            description: "Healthy oats with fruits",
            image: oats,
            ingredients: ["Oats", "Milk", "Fruits", "Honey"],
            instructions: "To make Masala Oats, start by dry roasting 1 cup of oats in a pan until lightly golden, then set aside. In the same pan, heat 1 tablespoon of oil and sauté 1 chopped onion, 1 chopped tomato, and 1 chopped green chili until soft. Add 1/2 teaspoon of mustard seeds, 1/2 teaspoon of cumin seeds, and 1/4 teaspoon of turmeric powder, and cook for a minute. Stir in 1 cup of mixed vegetables (like peas, carrots, and beans) and cook until tender. Add the roasted oats, 2 cups of water, and salt to taste. Cook for 5-7 minutes until the oats are creamy and the vegetables are cooked through. Garnish with fresh coriander and serve hot."
        },
        {
            title: "Chilla",
            description: "Spicy besan chilla",
            image: chilla,
            ingredients: ["Besan", "Spices", "Water", "Vegetables"],
            instructions: "To make a Besan Chilla, start by mixing 1 cup of besan (gram flour) with water to form a smooth batter. Add 1 finely chopped onion, 1 finely chopped green chili, and a handful of chopped vegetables like bell peppers, tomatoes, and spinach. Season with 1/2 teaspoon of turmeric powder, 1/2 teaspoon of cumin seeds, and salt to taste. Heat a non-stick pan with a little oil. Pour a ladleful of batter into the pan, spreading it into a thin circle. Cook for 2-3 minutes on each side until golden brown and crisp. Serve hot with chutney or yogurt."
        },
        {
            title: "Poha",
            description: "Classic Indian poha",
            image: poha1,
            ingredients: ["Poha", "Spices", "Onions", "Peanuts"],
            instructions: "To make Poha, start by rinsing 2 cups of poha (flattened rice) under water and draining it well. In a pan, heat 2 tablespoons of oil and fry 2 tablespoons of peanuts until they turn golden brown, then set them aside. In the same pan, add 1 teaspoon of mustard seeds, 1/2 teaspoon of cumin seeds, 8-10 curry leaves, and 1-2 chopped green chilies, and sauté until aromatic. Next, add 1 chopped onion and cook until it becomes translucent. If you like, you can also add a chopped potato and cook until it's soft. Then, add the rinsed poha to the pan along with 1/2 teaspoon of turmeric, salt to taste, and 1/2 teaspoon of sugar, stirring gently to combine. Finally, add the fried peanuts back to the pan, turn off the heat, and squeeze lemon juice over the poha. Garnish with fresh coriander, and your poha is ready to be served hot and enjoyed."
        },
        {
            title: "Sandwich",
            description: "Veggie sandwich",
            image: sandwich,
            ingredients: ["Bread", "Vegetables", "Cheese", "Butter"],
            instructions: "To make a Veggie Sandwich, start by spreading butter on two slices of bread. Layer thin slices of cucumber, tomato, and onion on one slice of bread. Add a slice of cheese on top, and optionally, a spread of mayonnaise or mustard. Season with salt, pepper, and your favorite herbs or spices. Top with the second slice of bread and press down gently. For a grilled version, place the sandwich in a preheated skillet or panini press until the bread is golden brown and the cheese is melted. Cut in half and serve warm."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-5">
            {/* Back to Home Button */}
            <button
                className="absolute top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition-colors"
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>
            <div className="container mx-auto mt-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 animate-pulse">
                    Breakfast Recipes
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recipes.map((recipe, index) => (
                        <div
                            key={index}
                            className={`relative group transform transition-all duration-700 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105`}
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    className="w-full h-64 object-cover" // Increased the height
                                    src={recipe.image}
                                    alt={recipe.title}
                                />
                                {/* Overlay with recipe details */}
                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white overflow-hidden">
                                    <h2 className="text-xl font-semibold mb-2 text-center">
                                        {recipe.title}
                                    </h2>
                                    <p className="text-sm mb-2 text-center">
                                        {recipe.description}
                                    </p>
                                    <div className="overflow-auto max-h-40 text-sm">
                                        <h3 className="text-lg font-bold">Ingredients:</h3>
                                        <ul className="list-disc list-inside">
                                            {recipe.ingredients.map((ingredient, i) => (
                                                <li key={i}>{ingredient}</li>
                                            ))}
                                        </ul>
                                        <h3 className="text-lg font-bold mt-2">Instructions:</h3>
                                        <p>{recipe.instructions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Breakfast;
