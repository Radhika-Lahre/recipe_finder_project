import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './style.css';
import salad from '../images/salad.png';
import cremeSalad from '../images/cremesalad.jpg';
import fruitChat from '../images/fruitchat.webp';
import sprouts from '../images/sprouts.png';

function Vegan() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500); // Delay to trigger animations
    }, []);

    const recipes = [
        {
            title: "Salad",
            description: "Fresh and healthy green salad",
            image: salad,
            ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive Oil", "Lemon Juice"],
            instructions: "To make a green salad, start by washing and chopping the lettuce, tomatoes, and cucumbers. In a large bowl, combine the vegetables. Drizzle with olive oil and lemon juice. Season with salt and pepper to taste. Toss the salad to mix the ingredients thoroughly and serve fresh."
        },
        {
            title: "Creamy Salad",
            description: "Rich and creamy salad",
            image: cremeSalad,
            ingredients: ["Mixed Vegetables", "Cream", "Salt", "Pepper", "Herbs"],
            instructions: "To make a creamy salad, mix chopped vegetables like carrots, cucumbers, and bell peppers in a large bowl. Add a generous amount of fresh cream. Season with salt, pepper, and herbs of your choice. Mix everything well until the vegetables are evenly coated with the cream. Serve chilled."
        },
        {
            title: "Fruit Chat",
            description: "Sweet and tangy fruit chat",
            image: fruitChat,
            ingredients: ["Mixed Fruits", "Chaat Masala", "Lemon Juice", "Mint"],
            instructions: "To make fruit chat, chop a variety of fruits like apples, bananas, and pomegranates. Add them to a bowl and sprinkle with chaat masala and lemon juice. Garnish with fresh mint leaves. Toss everything gently and serve immediately."
        },
        {
            title: "Sprouts Salad",
            description: "Protein-packed sprouts salad",
            image: sprouts,
            ingredients: ["Sprouts", "Tomato", "Onion", "Cucumber", "Lemon Juice"],
            instructions: "To make a sprouts salad, combine sprouted lentils or beans with chopped tomatoes, onions, and cucumbers. Add lemon juice and salt to taste. Mix well and serve fresh."
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
                    Vegan Recipes
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

export default Vegan;
