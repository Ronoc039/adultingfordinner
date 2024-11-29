const foods = [
    '🍕', '🍔', '🍣', '🍝', '🥗', '🌮', '🥩', '🍦', '🥪', '🍜',
    '🍤', '🍰', '🍩', '🍪', '🍉', '🍇', '🍓', '🍊', '🍋', '🍍',
    // Add more emojis to reach 200 as needed
];

const fruits = ['🍉', '🍇', '🍓', '🍊', '🍋', '🍍'];

const meals = [
    'Egyptian Koshari with Tomato Sauce',
    'Greek Souvlaki with Tzatziki Sauce',
    'Chinese Kung Pao Chicken with Steamed Rice',
    'Spaghetti Bolognese with garlic bread and a side salad',
    'Grilled chicken with roasted vegetables and quinoa',
    'Sushi platter with miso soup and edamame',
    'Burger with fries and a milkshake',
    'Steak with mashed potatoes and green beans',
    'Tacos with rice and beans',
    'Pizza with a Caesar salad',
    'Salmon with asparagus and rice pilaf',
    'Chicken curry with naan and basmati rice',
    'Vegan Buddha bowl with hummus and pita',
    'Grilled Chicken with Quinoa Salad',
    'Spaghetti Carbonara',
    'Beef Stir Fry with Vegetables',
    'Veggie Burger with Sweet Potato Fries',
    'Shrimp Tacos with Mango Salsa',
    'Margherita Pizza',
    'Lemon Herb Roasted Salmon',
    'BBQ Ribs with Coleslaw',
    'Chicken Alfredo Pasta',
    'Vegetable Curry with Rice',
    'Stuffed Bell Peppers',
    'Fish and Chips',
    'Pork Chops with Apple Sauce',
    'Eggplant Parmesan',
    'Thai Green Curry',
    'Sushi Platter',
    'Turkey Meatballs with Spaghetti',
    'Lamb Kebabs with Tzatziki',
    'Pad Thai',
    'Mushroom Risotto',
    'Chicken Caesar Salad',
    'Beef Enchiladas',
    'Ratatouille',
    'Fettuccine Alfredo with Shrimp',
    'Chicken Tikka Masala',
    'Pulled Pork Sandwiches',
    'Quiche Lorraine',
    'Baked Ziti',
    'Greek Gyro with Tzatziki',
    'Moroccan Couscous with Vegetables',
    'Teriyaki Chicken with Rice',
    'Veggie Stir Fry with Tofu',
    'Lasagna',
    'Chicken Quesadillas',
    'Beef Bourguignon',
    'Falafel Wrap with Hummus',
    'Seafood Paella',
    'Roasted Duck with Orange Sauce',
    'Spinach and Ricotta Cannelloni',
    'Korean BBQ Beef',
    'Chicken Pot Pie',
    'Bangers and Mash',
    'Grilled Cheese and Tomato Soup',
    'Shrimp and Grits',
    'Chili Con Carne',
    'Moussaka',
    'Baked Salmon with Dill Sauce',
    'Chicken Fajitas',
    'Lobster Rolls',
    'Vegetarian Samosas',
    'Tandoori Chicken with Naan and Chutney',
    'Sushi Rolls with Edamame',
    'Beef Pho with Fresh Herbs',
    'Chicken Shawarma with Hummus and Pita',
    'Thai Red Curry with Jasmine Rice',
    'Paella with Seafood and Chorizo',
    'Miso Ramen with Soft-Boiled Egg',
    'Lamb Tagine with Couscous',
    'Korean Bibimbap with Kimchi',
    'Italian Osso Buco with Risotto',
    'Spanish Tapas with Patatas Bravas',
    'Greek Moussaka with Greek Salad',
    'Vietnamese Banh Mi with Pickled Vegetables',
    'Indian Butter Chicken with Basmati Rice',
    'Moroccan Harira Soup with Flatbread',
    'French Coq au Vin with Mashed Potatoes',
    'Jamaican Jerk Chicken with Rice and Peas',
    'Argentinian Empanadas with Chimichurri Sauce',
    'Turkish Kebab with Bulgur Pilaf',
    'Russian Beef Stroganoff with Egg Noodles',
    'Ethiopian Doro Wat with Injera',
    'Mexican Pozole with Tostadas',
    'Brazilian Feijoada with Collard Greens',
    'Lebanese Falafel with Tabbouleh',
    'Swedish Meatballs with Lingonberry Sauce',
    'Peruvian Ceviche with Sweet Potato',
    'Italian Risotto with Porcini Mushrooms',
    'Austrian Wiener Schnitzel with Potato Salad',
    'Chinese Dim Sum with Soy Sauce Dip',
    'Portuguese Bacalhau with Roasted Potatoes',
    'Hungarian Goulash with Spaetzle',
    'Polish Pierogi with Sour Cream',
    'Cuban Ropa Vieja with Black Beans and Rice',
    'Thai Pad See Ew with Broccoli',
    'German Sauerbraten with Red Cabbage',
    'Malaysian Nasi Lemak with Anchovies',
    'French Ratatouille with Baguette',
    'Indonesian Nasi Goreng with Satay',
    'Korean Japchae with Spinach',
    'Italian Bolognese with Garlic Bread',
    'Spanish Gazpacho with Crusty Bread',
    'Indian Samosas with Tamarind Sauce',
    'Japanese Tempura with Miso Soup',
    'Mexican Chiles Rellenos with Refried Beans',
    'Filipino Adobo with Garlic Rice',
    'Thai Green Papaya Salad with Sticky Rice',
    'Moroccan Couscous with Roasted Vegetables'
];

const foodContainer = document.getElementById('floating-food-container');
const foodList = document.getElementById('food-list');
const randomFoodResult = document.getElementById('random-food-result');
const randomFoodButton = document.getElementById('random-food-button');
const scoreDisplay = document.getElementById('score');

let score = 0;
let initialPositions = [];
let clickedFruits = new Set();

// Generate random floating food items
function generateFloatingFood() {
    foodContainer.innerHTML = ''; // Clear existing food
    initialPositions = []; // Reset initial positions

    foods.forEach((food, index) => {
        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        const left = Math.random() * (window.innerWidth - 50);
        const top = Math.random() * (window.innerHeight - 50);
        foodElement.style.left = `${left}px`;
        foodElement.style.top = `${top}px`;
        foodElement.textContent = food;

        // Random animation speed and direction
        const duration = Math.random() * 3 + 2; // Between 2 to 5 seconds
        const direction = Math.random() < 0.5 ? 'normal' : 'reverse';
        foodElement.style.animation = `float ${duration}s ${direction} infinite`;

        initialPositions[index] = { left, top, foodElement };
        foodElement.addEventListener('click', () => {
            addToPlate(food, index);
            if (fruits.includes(food)) {
                clickedFruits.add(food);
                checkFruitsCollected();
            }
            showPoints(foodElement);
        });
        foodContainer.appendChild(foodElement);
    });
}

// Show random points
function showPoints(foodElement) {
    const points = Math.random() < 0.8 ? Math.floor(Math.random() * 5) + 1 : -(Math.floor(Math.random() * 2) + 1);
    const pointElement = document.createElement('div');
    pointElement.classList.add('point-popup');
    pointElement.textContent = points >= 0 ? `+${points}` : `${points}`;
    pointElement.style.left = foodElement.style.left;
    pointElement.style.top = foodElement.style.top;
    pointElement.style.color = points >= 0 ? 'green' : 'red';

    document.body.appendChild(pointElement);

    // Update score
    updateScore(points);

    // Remove the point element after animation
    setTimeout(() => {
        pointElement.remove();
    }, 1000);
}

// Update score display
function updateScore(points) {
    score += points;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Add clicked food to the plate in random positions
function addToPlate(food, index) {
    const li = document.createElement('li');
    li.textContent = food;
    li.style.position = 'absolute';
    li.style.fontSize = '2em';

    // Randomly position within the plate
    const maxLeft = 200; // Max width of the plate minus some padding
    const maxTop = 200; // Max height of the plate minus some padding
    li.style.left = Math.random() * maxLeft + 'px';
    li.style.top = Math.random() * maxTop + 'px';

    li.addEventListener('click', () => removeFromPlate(index, li));
    foodList.appendChild(li);

    // Remove the food from its floating position
    initialPositions[index].foodElement.style.display = 'none';
}

// Remove food from the plate and return it to its original position
function removeFromPlate(index, li) {
    li.remove();
    const { left, top, foodElement } = initialPositions[index];
    foodElement.style.display = 'block';
    foodElement.style.left = `${left}px`;
    foodElement.style.top = `${top}px`;
}

// Check if all fruits have been collected
function checkFruitsCollected() {
    if (clickedFruits.size === fruits.length) {
        displayImage();
    }
}

// Random meal selector for dinner
randomFoodButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];
    randomFoodResult.textContent = `For dinner tonight, the universe wants you to eat ${randomMeal}. You're welcome!`;
});

// Initialize the floating food items
generateFloatingFood();

// Ensure floating foods are generated upon resizing the window
window.addEventListener('resize', generateFloatingFood);

// Function to display an image when all fruits are collected
function displayImage() {
    const image = document.createElement('img');
    image.src = 'Assets/Dinner.jpg'; // Replace with your image path
    image.style.position = 'absolute';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%, -50%)';
    image.style.zIndex = '1000';
    document.body.appendChild(image);

    // Remove image after a few seconds
    setTimeout(() => {
        image.remove();
    }, 5000);
}
