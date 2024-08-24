import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import jalebi from '../images/jalebi.webp';
import rasgulla from '../images/rasgulla.png';
import gulabjamun from '../images/gulabjamun.png';
import laddu from '../images/laddu.png';

function Dessert() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    const recipes = [
        {
            title: "Jalebi",
            description: "Crispy and sweet traditional Indian dessert",
            image: jalebi,
            ingredients: ["Flour", "Sugar", "Saffron", "Ghee"],
            instructions: "To make Jalebi, mix 1 cup of flour with 1/2 cup of yogurt and water to form a smooth batter. Let it ferment for 8 hours. For the sugar syrup, boil 2 cups of sugar with 1 cup of water and a pinch of saffron until it reaches a one-string consistency. Heat ghee in a pan. Pour the batter into a squeeze bottle and create circular shapes in the hot ghee. Fry until golden brown, then soak the jalebis in the sugar syrup for a few minutes. Serve hot."
        },
        {
            title: "Rasgulla",
            description: "Soft and spongy Indian cheese balls in sugar syrup",
            image: rasgulla,
            ingredients: ["Milk", "Lemon", "Sugar", "Water"],
            instructions: "To make Rasgulla, boil 1 liter of milk and add lemon juice to curdle it. Strain the whey and hang the chhena (curdled milk) in a cloth for 30 minutes. Knead the chhena until smooth and form small balls. Boil 1 cup of sugar in 4 cups of water to make a syrup. Add the chhena balls to the boiling syrup and cook for 15 minutes, ensuring they don't touch each other. Let the rasgullas cool in the syrup and serve chilled."
        },
        {
            title: "Gulab Jamun",
            description: "Deep-fried dough balls soaked in sugar syrup",
            image: gulabjamun,
            ingredients: ["Khoya", "Flour", "Sugar", "Cardamom"],
            instructions: "To make Gulab Jamun, mix 1 cup of khoya with 2 tablespoons of flour and knead into a smooth dough. Divide the dough into small balls and fry them in ghee on low heat until golden brown. For the syrup, boil 2 cups of sugar with 1 cup of water and 1/4 teaspoon of cardamom powder. Soak the fried gulab jamuns in the hot syrup for at least 30 minutes before serving."
        },
        {
            title: "Laddu",
            description: "Traditional sweet balls made from gram flour",
            image: laddu,
            ingredients: ["Besan", "Ghee", "Sugar", "Cardamom"],
            instructions: "To make Besan Laddus, roast 2 cups of besan (gram flour) in 1/2 cup of ghee on low heat until it turns golden and fragrant. Let it cool slightly, then mix in 1 cup of powdered sugar and 1/2 teaspoon of cardamom powder. Form the mixture into small balls (laddus) while it's still warm. Let them cool completely before storing in an airtight container."
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
                    Dessert Recipes
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

export default Dessert;
