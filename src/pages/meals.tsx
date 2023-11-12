import DetailedMealModal from '@/components/DetailedMealModal';
import MealCard from '@/components/MealCard';
import styles from '@/styles/Meals.module.scss';
import { useCallback, useState } from 'react';

const meals = [
    {
        _id: "655042e2ec01f325dbdb7534",
        name: "Food",
        description: "Really good food",
        price: 100,
        ingredients: ['olives', 'cheese', 'chef'],
        chef: "chef",
        cookTime: '2T03:03:27.190',
        pickupTime: "2023-11-12T03",
        image: "img",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'), 
    },
    {
        _id: "655042e2ec01f325dbdb7535",
        name: "Food",
        description: "Really good food",
        price: 100,
        ingredients: ['olives', 'cheese', 'chef'],
        chef: "chef",
        cookTime: '2T03:03:27.190',
        pickupTime: "2023-11-12T03",
        image: "img",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7536",
        name: "Food",
        description: "Really good food",
        price: 100,
        ingredients: ['olives', 'cheese', 'chef'],
        chef: "chef",
        cookTime: '2T03:03:27.190',
        pickupTime: "2023-11-12T03",
        image: "img",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7537",
        name: "Food",
        description: "Really good food",
        price: 100,
        ingredients: ['olives', 'cheese', 'chef'],
        chef: "chef",
        cookTime: '2T03:03:27.190',
        pickupTime: "2023-11-12T03",
        image: "img",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7538",
        name: "Food",
        description: "Really good food",
        price: 100,
        ingredients: ['olives', 'cheese', 'chef'],
        chef: "chef",
        cookTime: '2T03:03:27.190',
        pickupTime: "2023-11-12T03",
        image: "img",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    },
    {
        _id: "655042e2ec01f325dbdb7539",
        name: "Food",
        description: "Really good food",
        price: 100,
        ingredients: ['olives', 'cheese', 'chef'],
        chef: "chef",
        cookTime: '2T03:03:27.190',
        pickupTime: "2023-11-12T03",
        image: "img",
        createdAt: new Date('2023-11 - 12T03: 13: 38.493+00:00'),
        updatedAt: new Date('2023-11 - 12T03: 13: 38.493+00:00')
    }
];

function Meals() {
    const [meal, setMeal] = useState(null);
    const setOpenMeal = useCallback((arg: any) => {
        setMeal(arg)
    }, [])
    const closeModal = useCallback(() => {
        setMeal(null)
    }, [])

    return (
        <center className={styles.mealsContainer}>
            <h1>Explore meals from chefs near you</h1>
            <div className={styles.mealsCards}>
                {meals.map(meal => (
                    <MealCard key={meal._id} meal={meal} onClick={setOpenMeal} />
                ))}
            </div>
            <DetailedMealModal mmodalIsOpen={Boolean(meal)} closeModal={closeModal} />
        </center>
    )
}

export default Meals