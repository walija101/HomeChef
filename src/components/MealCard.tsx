import { MealType } from "@/lib/models/meal/meal.types"
import styles from '@/styles/MealCard.module.scss'

type MealCardProps = {
    meal: MealType
}
export default function MealCard({ meal }: MealCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.pictureContainer}>
            <img src="./images/food.jpeg" style={{ width: '100%', height: '100%' }}/>
        </div>
        <div className={styles.nameSection}>
            <h2 className={styles.foodName}>{meal.name}</h2>
            <h1 className={styles.price}>{`$${meal.price}`}</h1>
        </div>
        <p>{meal.description}</p>
        <p>{`Ingredients include: ${meal.ingredients.join(', ')}`}</p>
    </div>
  )
}
