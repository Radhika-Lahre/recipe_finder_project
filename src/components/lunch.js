import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import paratha from '../images/paratha.png';
import pulav from '../images/pulav.webp';
import khichdi from '../images/khichdi.png';
import thali from '../images/thali.png';

function Lunch() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    const recipes = [
        {
            title: "Paratha",
            description: "Classic Indian paratha with stuffing",
            image: paratha,
            ingredients: ["Wheat Flour", "Ghee", "Spices", "Stuffing (Aloo/Gobi)"],
            instructions: "To make Paratha, start by kneading 2 cups of wheat flour with water to form a soft dough. Prepare the stuffing by cooking mashed potatoes or grated cauliflower with spices like cumin, coriander, and garam masala. Roll out the dough into small circles, place a portion of the stuffing in the center, and fold the edges to seal. Roll it out again gently and cook on a hot griddle with ghee until golden brown on both sides. Serve hot with yogurt or pickle."
        },
        {
            title: "Pulav",
            description: "Flavorful mixed vegetable pulav",
            image: pulav,
            ingredients: ["Rice", "Mixed Vegetables", "Spices", "Ghee"],
            instructions: "To make Pulav, rinse 1 cup of basmati rice and set aside. In a pan, heat 2 tablespoons of ghee and sauté whole spices like bay leaf, cinnamon, and cloves. Add 1 chopped onion and sauté until golden brown. Add mixed vegetables like peas, carrots, and beans, and cook for a few minutes. Stir in the rinsed rice, 2 cups of water, and salt to taste. Cover and cook on low heat until the rice is fluffy and the vegetables are tender. Serve hot with raita."
        },
        {
            title: "Khichdi",
            description: "Comforting moong dal khichdi",
            image: khichdi,
            ingredients: ["Rice", "Moong Dal", "Spices", "Ghee"],
            instructions: "To make Khichdi, rinse 1/2 cup of rice and 1/2 cup of moong dal, then soak them together for 30 minutes. In a pressure cooker, heat 2 tablespoons of ghee and add cumin seeds and asafoetida. Add 1 chopped tomato and sauté until soft. Add the soaked rice and dal, 4 cups of water, turmeric, and salt to taste. Close the lid and cook for 3 whistles. Allow the pressure to release naturally. Serve hot with ghee and pickles."
        },
        {
            title: "Thali",
            description: "Traditional Indian thali",
            image: thali,
            ingredients: ["Variety of Dishes", "Chapati", "Rice", "Dessert"],
            instructions: "A traditional Indian thali is a platter that includes a variety of dishes such as dal, sabzi, chapati, rice, pickles, and dessert. Each region in India has its own variation of a thali. Typically, the meal is served on a large plate with small bowls for each dish. The thali is enjoyed by mixing different flavors and textures, offering a balanced and wholesome meal."
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
                    Lunch Recipes
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recipes.map((recipe, index) => (
                        <div
                            key={index}
                            className={`relative group transform transition-all duration-700 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105`}
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    className="w-full h-64 object-cover"
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

export default Lunch;
