import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './style.css';
import chickenLollypop from '../images/chickenlollypop.webp';
import chickenTikka from '../images/chickentikka.webp';
import muttonPaya from '../images/muttonpaya.png';
import fish from '../images/fish.webp';

function Meat() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500); // Delay to trigger animations
    }, []);

    const recipes = [
        {
            title: "Chicken Lollypop",
            description: "Spicy and crispy chicken lollypops",
            image: chickenLollypop,
            ingredients: ["Chicken wings", "Spices", "Cornflour", "Oil"],
            instructions: "To make Chicken Lollypop, marinate chicken wings with spices and cornflour. Heat oil in a deep frying pan and fry the wings until golden brown. Serve hot with spicy dip."
        },
        {
            title: "Chicken Tikka",
            description: "Juicy grilled chicken tikka",
            image: chickenTikka,
            ingredients: ["Chicken pieces", "Yogurt", "Spices", "Lemon juice"],
            instructions: "To make Chicken Tikka, marinate chicken pieces in yogurt, spices, and lemon juice. Grill until cooked and slightly charred. Serve with mint chutney."
        },
        {
            title: "Mutton Paya",
            description: "Flavorful and rich mutton paya",
            image: muttonPaya,
            ingredients: ["Mutton trotters", "Spices", "Onions", "Garlic"],
            instructions: "To make Mutton Paya, cook mutton trotters with spices, onions, and garlic until tender. Let it simmer for hours to bring out the rich flavor. Serve hot with naan."
        },
        {
            title: "Fish Fry",
            description: "Crispy and spicy fried fish",
            image: fish,
            ingredients: ["Fish fillets", "Spices", "Rice flour", "Oil"],
            instructions: "To make Fish Fry, marinate fish fillets with spices and coat with rice flour. Deep fry until golden and crispy. Serve with lemon wedges."
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
                    Meat Recipes
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

export default Meat;
