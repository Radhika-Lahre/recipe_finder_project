import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './style.css';
import oats from '../images/chocoats.png';
import chilla from '../images/chocolatecake.webp';
import poha1 from '../images/cupcake.webp';
import sandwich from '../images/shake.png';

function Chocolate() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500); // Delay to trigger animations
    }, []);

    const recipes = [
        {
            title: "Chocolate Oats",
            description: "Delicious oats with a chocolate twist",
            image: oats,
            ingredients: ["Oats", "Milk", "Cocoa Powder", "Honey", "Fruits"],
            instructions: "To make Chocolate Oats, start by cooking 1 cup of oats in 2 cups of milk over medium heat. Once the oats begin to soften, stir in 2 tablespoons of cocoa powder and 1 tablespoon of honey. Cook until the mixture thickens to your desired consistency. Top with fresh fruits and a drizzle of extra honey before serving."
        },
        {
            title: "Chocolate Cake",
            description: "Rich and moist chocolate cake",
            image: chilla,
            ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Baking Powder"],
            instructions: "To make a Chocolate Cake, preheat your oven to 350°F (175°C). In a bowl, mix 1.5 cups of flour, 1 cup of sugar, 1/2 cup of cocoa powder, and 1.5 teaspoons of baking powder. In another bowl, whisk together 2 eggs, 1 cup of melted butter, and 1 cup of milk. Combine the wet and dry ingredients, and mix until smooth. Pour the batter into a greased cake pan and bake for 30-35 minutes. Let the cake cool before frosting."
        },
        {
            title: "Chocolate Cupcake",
            description: "Cute cupcakes with a chocolate flavor",
            image: poha1,
            ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Vanilla Extract"],
            instructions: "To make Chocolate Cupcakes, preheat your oven to 350°F (175°C) and line a muffin tin with cupcake liners. In a bowl, mix 1.5 cups of flour, 1 cup of sugar, 1/2 cup of cocoa powder, and 1 teaspoon of baking soda. In another bowl, whisk together 2 eggs, 1 cup of melted butter, and 1 teaspoon of vanilla extract. Combine the wet and dry ingredients, and stir until smooth. Fill the cupcake liners 3/4 full with the batter and bake for 20-25 minutes. Let them cool before frosting."
        },
        {
            title: "Chocolate Shake",
            description: "Creamy and refreshing chocolate shake",
            image: sandwich,
            ingredients: ["Milk", "Ice Cream", "Cocoa Powder", "Sugar", "Whipped Cream"],
            instructions: "To make a Chocolate Shake, blend 2 cups of milk, 3 scoops of chocolate ice cream, 2 tablespoons of cocoa powder, and 1 tablespoon of sugar until smooth. Pour the shake into a tall glass and top with whipped cream. Serve immediately for a refreshing treat."
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
                    Chocolate Recipes
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

export default Chocolate;
