
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import cover from '../images/cover.png';
import search from '../images/search.png';
import breakfast from '../images/breakfast.png';
import vegan from '../images/vegan.png';
import meat from '../images/meat.png';
import dessert from '../images/dessert.png';
import lunch from '../images/lunch.png';
import chocolate from '../images/chocolate.png';
import chef from '../images/chef.png';
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';
import stars from '../images/stars.png';
import Facebook from '../images/Facebook.png';
import TwitterX from '../images/TwitterX.png';
import Instagram from '../images/Instagram.png';
import './style.css';

function Data() {
    const [searchTerm, setSearchTerm] = useState(""); // State for search input
    const [searchResult, setSearchResult] = useState(null); // State for search result
    const navigate = useNavigate(); // Initialize useNavigate

    // Mapping search terms to dish pages
    const searchMappings = {
        "sandwich": "breakfast",
        "poha": "breakfast",
        "chilla": "breakfast",
        "oats": "breakfast",
        "vegan": "vegan",
        "salad": "vegan",
        "fruit": "vegan",
        "apple": "vegan",
        "vegetable": "vegan",
        "chicken": "meat",
        "mutton": "meat",
        "fish": "meat",
        "dessert": "dessert",
        "jalebi": "dessert",
        "rasgulla": "dessert",
        "gulabjamun": "dessert",
        "laddu": "dessert",
        "lunch": "lunch",
        "rice": "lunch",
        "roti": "lunch",
        "chocolate": "chocolate",
    };

    const handleSearch = () => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const matchedPage = searchMappings[lowercasedSearchTerm];

        if (matchedPage) {
            navigate(`/${matchedPage}`); // Navigate to the matched dish page
        } else {
            setSearchResult("No result found"); // Show "No result found"
        }
    };

    return (
        <>
            <div className="cover-image">
                <img src={cover} alt="logo.." />
            </div>
            <div className="cover-text">
                <h1>COOKED</h1>
                <h3>Cooking.Made.Easy</h3>
                <div>
                    <img
                        src={search}
                        alt="search..."
                        onClick={handleSearch} // Add onClick handler to search image
                        style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer for better UX
                    />
                    <input
                        type="search"
                        placeholder="Search for Cuisine or a dish"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSearchResult(null); // Reset search result
                        }}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(); // Trigger search on Enter key press
                            }
                        }}
                    />
                </div>
                {searchResult && <p>{searchResult}</p>} {/* Show search result */}
            </div>

            {/* dishes varieties */}
            <div class="dishes">

                <Link to="breakfast"><img src={breakfast} alt="loading..." /></Link>

                <Link to="vegan"> <img src={vegan} alt="loading..." ></img></Link>
                <Link to="meat">  <img src={meat} alt="loading..." ></img></Link>
                <Link to="dessert">  <img src={dessert} alt="loading..." ></img></Link>
                <Link to="lunch">  <img src={lunch} alt="loading..." ></img></Link>
                <Link to="chocolate">  <img src={chocolate} alt="loading..." ></img></Link>

            </div>
            <div class="about">
                <div class="details">
                    <div class="d1">
                        <h1>Diverse Cuisine</h1>
                        <p>Discover recipes from
                            around the globe and
                            unleash your inner foodie.</p>
                    </div>
                    <div class="d2">  <h1>Healthy Choices</h1>
                        <p>Find nutritious and delicious
                            meal options tailored to
                            your needs.</p></div>
                    <div class="d3">  <h1>Step-by-Step Guides</h1>
                        <p>Become a master chef with
                            easy-to-follow instructions.</p></div>
                </div>
                <div class="chef">
                    <img src={chef} alt="load...."></img>
                </div>
            </div>

            <div class="recommendations">
                <h3>Artificial intelligence</h3>
                <h1>Personalized Recipe Recommendations</h1>
                <p class="p">Unleash the power of culinary AI. </p>
                <p>Our app learns your tastes and dietary preferences, </p>
                <p>delivering handpicked recipes that match your unique palate.</p>
                <p>Say goodbye to endless scrolling and hello to personalized </p>
                <p>perfection!</p>
                <button>Discover Your Taste</button>
            </div>
            <div class="exchange">
                <h3>Community</h3>
                <h1>Recipe Exchange</h1>
                <p class="p">Become part of a vibrant community of home cooks and chefs.</p>
                <p>Share your culinary masterpieces, discover new recipes, and
                </p>
                <p>exchange tips with like-minded food enthusiasts. Together,
                </p>
                <p>
                    we make cooking an art  </p>
                <button>Join Our Culinary Community</button>
            </div>
            <div class="challenges">
                <h3> Challenges</h3>
                <h1>Cooking Challenges and Rewards</h1>
                <p class="p">Add a dash of excitement to your culinary journey. Engage in cooking </p>
                <p>challenges, earn badges, and unlock rewards. It's not just about cooking; </p>
                <p>it's about cooking with a purpose!</p>
                <button>Take the Cooking Challenge</button>
            </div>
            <div class="ingredients">
                <h3>Ingredient Substitutions</h3>
                <h1>AI-Generated Ingredient Substitutions</h1>
                <p class="p">Adapt recipes effortlessly to what's in your pantry. Our AI suggests ingredient</p>
                <p>swaps to accommodate your preferences and what you have on hand. No </p>
                <p>swaps to accommodate your preferences and what you have on hand. No </p>
                <button>Cook with What You Have</button>
            </div>
            <div class="customer">
                <h1>Customer’s Choice</h1>
                <div class="data">

                    <div class="blog1 content">
                        <img src={blog1} class="a pic1" alt="load...." />
                        <div class="blog-1">
                            <img src={stars} alt="load...." /><label>5.0 Rating</label>
                            <p>I’ve discovered so many amazing recipes! Cooking has become so much fun!</p>
                            <h3>Sophie Turner</h3>
                        </div>
                    </div>
                    <div class="blog2 content">
                        <img src={blog2} class="a pic2" alt="load...." />
                        <div class="blog-2">
                            <img src={stars} alt="load...." /><label>4.5 Rating</label>
                            <p>This app has changed the way I view food – it's a total game-changer.</p>
                            <h3>Alex Mason</h3>
                        </div>
                    </div> <div class="blog3 content">
                        <img src={blog3} class="a pic3" alt="load...." />
                        <div class="blog-3">
                            <img src={stars} alt="load...." /><label>5.0 Rating</label>
                            <p>Without a doubt, the best recipe app out there.I’m hooked!</p>
                            <h3>Jasmine Patel</h3>
                        </div>
                    </div>

                </div>

            </div>

            <div class="subscribe">
                <h1>Stay Hungry. Stay Creative.</h1>
                <p>Subscribe for mouth-watering recipes, cooking tips,
                    and exclusive offers! You've got nothing to lose,
                    but a whole lot of flavor to gain.</p>
                <div>
                    <input type="email" placeholder="name@gmail.com" /><button>Subscribe</button>
                </div>
                <div class="social">
                    <div>
                        <img src={TwitterX} alt="load...." />
                        <img src={Instagram} class="insta" alt="load...." />
                        <img src={Facebook} alt="msg.." />
                    </div>
                    <h3>© 2023 Cooked Inc. All rights reserved.</h3>
                    <h3>Created on October 23, 2023</h3>
                </div>
            </div>
        </>
    )
}
export default Data;