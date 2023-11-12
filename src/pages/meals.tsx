import MealCard from '@/components/MealCard';
import styles from '@/styles/Meals.module.scss';

const meals = [
    {
        _id: "655042e2ec01f325dbdb7534",
        name: "Veggie Garlic Noodles",
        description: "This simple and satisfying recipe features tender noodles tossed in garlic, soy sauce, and sesame oil, then topped with vegetables for a flavorful vegetarian meal.",
        price: 10.99,
        ingredients: ['vegetable oil', 'garlic', 'green onions', 'carrots', 'snap peas', 'brown sugar', 'soy sauce', 'rice noodles'],
        chef: "Christina Contreras",
        chefPicture: "chef1",
        chefRating: "4.5",
        cookTime: '2:00 PM',
        pickupTime: "4:00 PM",
        image: "garlicNoodles",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'), 
    },
    {
        _id: "655042e2ec01f325dbdb7535",
        name: "Taco Soup",
        description: "This quick and easy taco soup is made entirely in one pot in less than 30 minutes. Topped with cheese, avocado, and all the fixins, this simple soup makes the perfect weeknight dinner that'll please just about anyone.",
        price: 5.00,
        ingredients: ['ground beef', 'garlic', 'onions', 'beans', 'tomato', 'cheese', 'sour cream', 'tortilla chips'],
        chef: "Brandy Nielsen",
        chefPicture: "chef2",
        chefRating: "3.5",
        cookTime: '12:00 AM',
        pickupTime: "1:00 PM",
        image: "tacoSoup",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7536",
        name: "Chicken & Veggie Stir-Fry",
        description: "Getting take-out is a crave-worthy indulgence. And with our easy chicken veggie stir fry recipe, you can recreate the magic of a Chinese takeout right in your very own kitchen. Feel free to mix up the protein or vegetables depending on what you have in your fridge. The simple sauce packs a flavor punch that will bring the dish together, no matter what.",
        price: 9.99,
        ingredients: ['chicken breast', 'salt', 'pepper', 'mushroom', 'broccoli ', 'sesame oil', 'peanuts', 'soy sauce'],
        chef: "Richard Young",
        chefPicture: "chef",
        chefRating: "5.0",
        cookTime: '6:00 PM',
        pickupTime: "8:00 PM",
        image: "chickenVeggie",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7537",
        name: "Easy Butter Chicken",
        description: "This simplified version of the Indian classic combines chicken, tomato sauce, and a slew of aromatic spices all in one pot to make a flavorful dinner that’s just as good as the version you’ll get at restaurants — only way easier to make.  Serve it over rice with a bit of cilantro to balance the heat and dinner is done.",
        price: 12.99,
        ingredients: ['chicken breast', 'salt', 'pepper', 'chili powder', 'turmeric ', 'butter', 'yellow onion', 'garam masala', 'cumin', 'ginger', 'garlic', 'tomato sauce', 'rice', 'heavy cream'],
        chef: "Tara Podhraski",
        chefPicture: "chef4",
        chefRating: "4.5",
        cookTime: '7:00 PM',
        pickupTime: "9:00 PM",
        image: "butterChicken",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7538",
        name: "Chicken Alfredo Penne",
        description: "Nothing spells comfort like Italian food. Steaming bowls of pasta, buttery, roasted garlic bread, and tureens of the most flavorful sauces: it’s all right there. Sometimes, you want to bring that comfort into your very own kitchen and, well, we’ve got just the recipe for you. This easy chicken alfredo penne will have you saying ‘mangia!’ before you even know it.",
        price: 10.00,
        ingredients: ['butter', 'chicken breasts', 'oregano', 'basil', 'salt ', 'black pepper', 'penne pasta', 'parmesan cheese'],
        chef: "Dick Grayson",
        chefPicture: "chef5",
        chefRating: "4.0",
        cookTime: '11:00 AM',
        pickupTime: "1:00 PM",
        image: "cheickenPenne",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7539",
        name: "Chocolate Chip Banana Bread",
        description: "We’ve all been baking banana bread lately, right? It’s been good, but it’s gotten, well, just a tad routine. In fact, it’s probably making you go just a liiiittle bananas yourself! So it’s time to sweeten the deal: this chocolate chip banana bread recipe combines two of your favorite things into one – now, you can have your chocolate and eat it, too!",
        price: 3.99,
        ingredients: ['ripe bananas', 'butter', 'sugar', 'egg', 'vanilla extract ', 'baking soda', 'salt', 'all-purpose flour', 'mini chocolate chips'],
        chef: "Gabriella Bautista",
        chefPicture: "chef6",
        chefRating: "4.5",
        cookTime: '8:00 AM',
        pickupTime: "11:00 AM",
        image: "bananaBread",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    }
];

function Meals() {
    return (
        <center className={styles.mealsContainer}>
            <h1>Explore meals from chefs near you</h1>
            <div className={styles.mealsCards}>
                {meals.map(meal => (
                    <MealCard key={meal._id} meal={meal} />
                ))}
            </div>
        </center>
    )
}

export default Meals