import React, { useState } from 'react';
import './WhatToCookApp.css';

// Our main app component
const WhatToCookApp = () => {
  // Sample meal data for a week with recipes and ingredients
  const meals = [
    {
      id: 1,
      name: "Chole Bhature",
      description: "A popular Punjabi dish consisting of spicy chickpeas (chole) and fried bread (bhature).",
      ingredients: ["Chickpeas", "Flour", "Yogurt", "Onions", "Tomatoes", "Ginger", "Garlic", "Green chilies", "Spices"],
      prepTime: "45 minutes",
      difficulty: "Medium"
    },
    {
      id: 2,
      name: "Palak Paneer",
      description: "Cottage cheese cubes in a creamy spinach gravy.",
      ingredients: ["Spinach", "Paneer", "Onions", "Tomatoes", "Ginger", "Garlic", "Cream", "Spices"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Masala Dosa",
      description: "Crispy rice and lentil crepe filled with spiced potato filling.",
      ingredients: ["Rice", "Urad dal", "Potatoes", "Onions", "Mustard seeds", "Curry leaves", "Turmeric", "Green chilies"],
      prepTime: "1 hour (plus fermentation time)",
      difficulty: "Medium"
    },
    {
      id: 4,
      name: "Rajma Chawal",
      description: "Red kidney bean curry served with steamed rice.",
      ingredients: ["Kidney beans", "Rice", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
      prepTime: "40 minutes",
      difficulty: "Easy"
    },
    {
      id: 5,
      name: "Vegetable Biryani",
      description: "Fragrant rice dish cooked with mixed vegetables and aromatic spices.",
      ingredients: ["Basmati rice", "Mixed vegetables", "Onions", "Yogurt", "Saffron", "Mint leaves", "Spices"],
      prepTime: "50 minutes",
      difficulty: "Medium"
    },
    {
      id: 6,
      name: "Aloo Paratha",
      description: "Wheat flatbread stuffed with spiced potato filling.",
      ingredients: ["Wheat flour", "Potatoes", "Green chilies", "Coriander leaves", "Spices", "Ghee"],
      prepTime: "35 minutes",
      difficulty: "Easy"
    },
    {
      id: 7,
      name: "Paneer Butter Masala",
      description: "Rich and creamy curry with cottage cheese cubes.",
      ingredients: ["Paneer", "Butter", "Cream", "Onions", "Tomatoes", "Cashews", "Spices"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    }
  ];

  // State for currently selected meal
  const [selectedMeal, setSelectedMeal] = useState(null);
  
  // Function to get a random meal suggestion
  const getRandomMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    setSelectedMeal(meals[randomIndex]);
  };

  return (
    <div className="app-container">
      {/* App Bar */}
      <header className="app-bar">
        <div>
          <h1>What to Cook Today?</h1>
          <p className="subtitle">Your daily meal planner for Indian cuisine</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="content">
          {/* Description */}
          <div className="intro-section">
            <h2>Can't decide what to cook today?</h2>
            <p>
              No worries! Get instant ideas for delicious Indian meals complete with ingredients list.
              Just click the button below to get a random suggestion.
            </p>
            <button className="primary-button" onClick={getRandomMeal}>
              Suggest a meal for today
            </button>
          </div>

          {/* Meal Display */}
          {selectedMeal && (
            <div className="meal-card selected-meal">
              <div className="meal-details">
                <h3>{selectedMeal.name}</h3>
                <p className="meal-description">{selectedMeal.description}</p>
                
                <div className="meal-info-grid">
                  <div>
                    <h4>Ingredients Needed:</h4>
                    <ul>
                      {selectedMeal.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Preparation Details:</h4>
                    <p><span className="label">Time:</span> {selectedMeal.prepTime}</p>
                    <p><span className="label">Difficulty:</span> {selectedMeal.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Available Meals */}
          <div className="meals-section">
            <h3>Browse All Meals</h3>
            <div className="meals-grid">
              {meals.map(meal => (
                <div key={meal.id} className="meal-card" onClick={() => setSelectedMeal(meal)}>
                  <div className="meal-card-content">
                    <h4>{meal.name}</h4>
                    <p className="meal-meta">{meal.prepTime} | {meal.difficulty}</p>
                    <div className="ingredients-preview">
                      {meal.ingredients.slice(0, 3).map((ingredient, idx) => (
                        <span key={idx} className="ingredient-chip">{ingredient}</span>
                      ))}
                      {meal.ingredients.length > 3 && (
                        <span className="ingredient-chip more-chip">+{meal.ingredients.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} What to Cook Today? | Your daily meal planner for Indian cuisine</p>
      </footer>
    </div>
  );
};

export default WhatToCookApp;