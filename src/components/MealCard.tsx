import { MealType } from "@/lib/models/meal/meal.types"
import styles from '@/styles/MealCard.module.scss'

type MealCardProps = {
    meal: MealType,
    onClick: (arg: any) => void
}
export default function MealCard({ meal, onClick }: MealCardProps) {
    return (
        <div className={styles.card} onClick={() => onClick(meal)}>
            <div className={styles.pictureContainer}>
                <img src="./images/food.jpeg" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className={styles.nameSection}>
                <h1 className={styles.foodName}>{meal.name}</h1>
                <h2 className={styles.price}>{`$${meal.price}`}</h2>
            </div>
            <p>{meal.description}</p>
            <p>{`Ingredients include: ${meal.ingredients.join(', ')}`}</p>
            <div className={styles.chefSection}>
                <div className={styles.chefIcon}>
                    <img src='./images/chef.jpg' />
                </div>
                <div className={styles.chefInfoSection}>
                    <h2 className={styles.chefName}>{meal.chef.toUpperCase()}</h2>
                    <p>Top Rated Cook</p>
                </div>
            </div>
        </div>
    )
}
