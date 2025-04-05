import React, { useState } from 'react';
import './WhatToCookApp.css';

// Our main app component
const WhatToCookApp = () => {

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
    },
    {
      id: 8,
      name: "Butter Chicken",
      description: "Tender chicken pieces cooked in a creamy tomato sauce.",
      ingredients: ["Chicken", "Butter", "Cream", "Tomatoes", "Onions", "Cashews", "Spices", "Fenugreek leaves"],
      prepTime: "45 minutes",
      difficulty: "Medium"
    },
    {
      id: 9,
      name: "Sambar",
      description: "Lentil-based vegetable stew cooked with tamarind and spices.",
      ingredients: ["Toor dal", "Mixed vegetables", "Tamarind", "Sambar powder", "Mustard seeds", "Curry leaves"],
      prepTime: "40 minutes",
      difficulty: "Medium"
    },
    {
      id: 10,
      name: "Pav Bhaji",
      description: "Spiced mashed vegetable dish served with soft bread rolls.",
      ingredients: ["Mixed vegetables", "Potatoes", "Tomatoes", "Onions", "Butter", "Pav bhaji masala", "Bread rolls"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 11,
      name: "Malai Kofta",
      description: "Vegetable and paneer dumplings in a rich and creamy gravy.",
      ingredients: ["Paneer", "Potatoes", "Mixed vegetables", "Cream", "Cashews", "Tomatoes", "Onions", "Spices"],
      prepTime: "50 minutes",
      difficulty: "Hard"
    },
    {
      id: 12,
      name: "Chicken Tikka Masala",
      description: "Grilled marinated chicken pieces in a spiced curry sauce.",
      ingredients: ["Chicken", "Yogurt", "Tomatoes", "Onions", "Cream", "Spices", "Coriander leaves"],
      prepTime: "45 minutes",
      difficulty: "Medium"
    },
    {
      id: 13,
      name: "Idli Sambar",
      description: "Steamed rice cakes served with lentil vegetable stew.",
      ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Toor dal", "Mixed vegetables", "Tamarind", "Spices"],
      prepTime: "30 minutes (plus fermentation time)",
      difficulty: "Medium"
    },
    {
      id: 14,
      name: "Baingan Bharta",
      description: "Smoky roasted eggplant mash cooked with spices.",
      ingredients: ["Eggplant", "Onions", "Tomatoes", "Green chilies", "Ginger", "Garlic", "Spices"],
      prepTime: "40 minutes",
      difficulty: "Easy"
    },
    {
      id: 15,
      name: "Dhokla",
      description: "Steamed fermented rice and chickpea flour cake.",
      ingredients: ["Gram flour", "Rice flour", "Yogurt", "Eno fruit salt", "Mustard seeds", "Green chilies", "Curry leaves"],
      prepTime: "30 minutes (plus fermentation time)",
      difficulty: "Medium"
    },
    {
      id: 16,
      name: "Chicken Biryani",
      description: "Fragrant rice dish layered with marinated chicken and spices.",
      ingredients: ["Basmati rice", "Chicken", "Yogurt", "Onions", "Tomatoes", "Mint leaves", "Saffron", "Spices"],
      prepTime: "1 hour",
      difficulty: "Hard"
    },
    {
      id: 17,
      name: "Matar Paneer",
      description: "Green peas and cottage cheese cubes in a tomato-based gravy.",
      ingredients: ["Paneer", "Green peas", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 18,
      name: "Dal Makhani",
      description: "Creamy black lentil and kidney bean dish slow-cooked with butter and cream.",
      ingredients: ["Black lentils", "Kidney beans", "Butter", "Cream", "Tomatoes", "Onions", "Spices"],
      prepTime: "45 minutes (plus soaking time)",
      difficulty: "Medium"
    },
    {
      id: 19,
      name: "Vada Pav",
      description: "Spiced potato fritter in a bread bun with chutneys.",
      ingredients: ["Potatoes", "Bread buns", "Gram flour", "Green chilies", "Garlic", "Tamarind chutney", "Mint chutney"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 20,
      name: "Rogan Josh",
      description: "Aromatic lamb curry cooked with Kashmiri spices.",
      ingredients: ["Lamb", "Yogurt", "Onions", "Kashmiri chili powder", "Ginger", "Garlic", "Spices"],
      prepTime: "1 hour",
      difficulty: "Medium"
    },
    {
      id: 21,
      name: "Saag Chicken",
      description: "Chicken cooked in a spinach-based sauce with spices.",
      ingredients: ["Chicken", "Spinach", "Onions", "Tomatoes", "Cream", "Ginger", "Garlic", "Spices"],
      prepTime: "45 minutes",
      difficulty: "Medium"
    },
    {
      id: 22,
      name: "Gobi Manchurian",
      description: "Indo-Chinese dish of fried cauliflower in a spicy, tangy sauce.",
      ingredients: ["Cauliflower", "Corn flour", "Soy sauce", "Garlic", "Green chilies", "Spring onions", "Vinegar"],
      prepTime: "40 minutes",
      difficulty: "Medium"
    },
    {
      id: 23,
      name: "Chana Masala",
      description: "Spicy chickpea curry cooked with tomatoes and spices.",
      ingredients: ["Chickpeas", "Onions", "Tomatoes", "Ginger", "Garlic", "Green chilies", "Spices"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 24,
      name: "Methi Paratha",
      description: "Whole wheat flatbread stuffed with fenugreek leaves and spices.",
      ingredients: ["Wheat flour", "Fenugreek leaves", "Green chilies", "Ginger", "Spices", "Ghee"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 25,
      name: "Hyderabadi Chicken Dum Biryani",
      description: "Layered rice dish with marinated chicken cooked on dum (slow steam).",
      ingredients: ["Basmati rice", "Chicken", "Yogurt", "Fried onions", "Mint leaves", "Saffron", "Spices"],
      prepTime: "1 hour 15 minutes",
      difficulty: "Hard"
    },
    {
      id: 26,
      name: "Tandoori Chicken",
      description: "Chicken marinated in yogurt and spices, traditionally cooked in a tandoor.",
      ingredients: ["Chicken", "Yogurt", "Lemon juice", "Ginger", "Garlic", "Tandoori masala", "Kashmiri chili powder"],
      prepTime: "30 minutes (plus marination time)",
      difficulty: "Medium"
    },
    {
      id: 27,
      name: "Kadai Paneer",
      description: "Cottage cheese cooked with bell peppers in a spicy tomato gravy.",
      ingredients: ["Paneer", "Bell peppers", "Onions", "Tomatoes", "Kadai masala", "Ginger", "Garlic"],
      prepTime: "30 minutes",
      difficulty: "Easy"
    },
    {
      id: 28,
      name: "Vegetable Korma",
      description: "Mixed vegetables in a creamy coconut and cashew sauce.",
      ingredients: ["Mixed vegetables", "Coconut milk", "Cashew paste", "Onions", "Tomatoes", "Cream", "Spices"],
      prepTime: "40 minutes",
      difficulty: "Medium"
    },
    {
      id: 29,
      name: "Naan",
      description: "Leavened flatbread traditionally cooked in a tandoor.",
      ingredients: ["All-purpose flour", "Yogurt", "Milk", "Baking powder", "Butter", "Garlic (optional)"],
      prepTime: "25 minutes (plus resting time)",
      difficulty: "Medium"
    },
    {
      id: 30,
      name: "Shahi Tukda",
      description: "Rich bread pudding dessert with saffron-infused milk and nuts.",
      ingredients: ["Bread", "Milk", "Sugar", "Saffron", "Cardamom", "Pistachios", "Almonds", "Ghee"],
      prepTime: "30 minutes",
      difficulty: "Medium"
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
              {selectedMeal ? "Not intrested? Suggest another meal" : "Suggest a meal for today"}
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